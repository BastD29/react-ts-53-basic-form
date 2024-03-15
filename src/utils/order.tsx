import { Order } from "../models/Order";

export const renderOrder = (order: Order) => {
  return (
    <div>
      <h3>{order.customer}</h3>
      <ul>
        {order.items.map((item) => (
          <li key={Math.random() * 100}>{item}</li>
        ))}
      </ul>
      <p>Total: ${order.total}</p>
    </div>
  );
};

export const orderKey = (order: Order) => {
  return order.id.toString();
};
