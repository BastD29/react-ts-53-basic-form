import { Order } from "../models/Order";

export const orders: Order[] = [
  {
    id: "1",
    customer: "John Smith",
    items: ["Item 1", "Item 2"],
    total: 29.99,
  },
  { id: "2", customer: "Jane Doe", items: ["Item 3", "Item 4"], total: 39.99 },
  {
    id: "3",
    customer: "Bob Johnson",
    items: ["Item 5", "Item 6"],
    total: 49.99,
  },
];
