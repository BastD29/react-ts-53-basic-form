import BasicForm from "../BasicForm/BasicForm";
import BasicFormUsingHook from "../BasicForm/BasicFormUsingHook";
import style from "./App.module.scss";

export default function App() {
  return (
    <div className={style["app"]}>
      <h1>App</h1>
      <BasicForm />
      <BasicFormUsingHook />
    </div>
  );
}
