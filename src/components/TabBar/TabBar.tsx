import style from "./TabBar.module.scss";

interface TabBarProps<T> {
  items: T[];
  selectedItem: T;
  onTabClick: (item: T, selectedIndex: number) => void;
}

export function TabBar<T extends { id: number; name: string }>(
  props: TabBarProps<T>
) {
  const { items, selectedItem, onTabClick } = props;

  return (
    <div className={style["tab-bar"]}>
      {items.map((item, index) => {
        const activeCls = item.id === selectedItem.id ? style["selected"] : "";

        return (
          <div
            key={item.id}
            className={`${style["tab-item"]} + ${activeCls}`}
            onClick={() => onTabClick(item, index)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
