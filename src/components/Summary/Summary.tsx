import style from "./Summary.module.scss";

interface SummaryProps<T extends object, K extends keyof T> {
  data: T;
  property: K;
}

export function Summary<T extends object, K extends keyof T>({
  data,
  property,
}: SummaryProps<T, K>) {
  const value = data[property] as string;
  console.log("value:", value);

  return (
    <div className={style["summary"]}>
      {typeof property === "string" ? (
        <p>
          {property}: {value}{" "}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
