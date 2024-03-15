import { Key, ReactNode } from "react";

import style from "./List.module.scss";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => Key;
}

const List = <T extends {}>({
  items,
  renderItem,
  keyExtractor,
}: ListProps<T>) => {
  return (
    <ul className={style["list"]}>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default List;
