import { Button, ButtonVariant } from "@patternfly/react-core";
import {
  MODAL_TYPES,
  useGlobalModalContext,
} from "../../../context/ModalContext";

export const AppLayout = () => {
  const { showModal } = useGlobalModalContext();

  const createModal = () => {
    showModal(MODAL_TYPES.CREATE_MODAL, {
      title: "Create instance form",
      confirmBtn: "Save",
    });
  };

  const deleteModal = () => {
    showModal(MODAL_TYPES.DELETE_MODAL);
  };

  const updateModal = () => {
    showModal(MODAL_TYPES.UPDATE_MODAL);
  };

  return (
    <>
      <Button variant={ButtonVariant.primary} onClick={createModal}>
        Create Modal
      </Button>
      <br />
      <br />
      <Button variant={ButtonVariant.primary} onClick={deleteModal}>
        Delete Modal
      </Button>
      <br />
      <br />
      <Button variant={ButtonVariant.primary} onClick={updateModal}>
        Update Modal
      </Button>
    </>
  );
};
