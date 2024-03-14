import { FC, ReactNode, createContext, useContext, useState } from "react";
import { CreateModal } from "../components/CreateModal/CreateModal";
import { DeleteModal } from "../components/DeleteModal/DeleteModal";
import { UpdateModal } from "../components/UpdateModal/UpdateModal";

export const MODAL_TYPES = {
  CREATE_MODAL: "CREATE_MODAL",
  DELETE_MODAL: "DELETE_MODAL",
  UPDATE_MODAL: "UPDATE_MODAL",
};

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.CREATE_MODAL]: CreateModal,
  [MODAL_TYPES.DELETE_MODAL]: DeleteModal,
  [MODAL_TYPES.UPDATE_MODAL]: UpdateModal,
};

type ModalStore = {
  modalType?: string;
  modalProps?: any;
};

// type GlobalModalContext = {
//   showModal: (modalType: string, modalProps?: any) => void;
//   hideModal: () => void;
//   store: any;
// };

type GlobalModalContextType = {
  showModal: (modalType: string, modalProps?: any) => void;
  hideModal: () => void;
  store: ModalStore;
};

const initialState: GlobalModalContextType = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
};

const GlobalModalContext = createContext<GlobalModalContextType>(initialState);

export const useGlobalModalContext = () => useContext(GlobalModalContext);

type GlobalModalProps = {
  children: ReactNode;
};

export const GlobalModal: FC<GlobalModalProps> = ({ children }) => {
  const [store, setStore] = useState<ModalStore>({});
  console.log("store:", store);

  // const { modalType, modalProps } = store || {};

  const showModal = (modalType: string, modalProps: any = {}) => {
    setStore({
      ...store,
      modalType,
      modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalType: undefined,
      modalProps: {},
    });
  };

  const renderComponent = () => {
    if (!store.modalType) {
      return null; // or appropriate fallback
    }

    const ModalComponent = MODAL_COMPONENTS[store.modalType];

    if (!ModalComponent) {
      return null;
    }

    return <ModalComponent id="global-modal" {...store.modalProps} />;
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};
