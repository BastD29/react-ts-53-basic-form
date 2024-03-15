import { Customer } from "../models/Customer";

export const renderCustomer = (customer: Customer) => {
  return (
    <div>
      <h3>{customer.name}</h3>
      <p>{customer.email}</p>
    </div>
  );
};

export const customerKey = (customer: Customer) => {
  return customer.id.toString();
};
