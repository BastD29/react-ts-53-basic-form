import { useState } from "react";

// data
import { customers } from "../../data/customers";
import { orders } from "../../data/orders";
import { userData } from "../../data/user";
import { socials } from "../../data/socials";

// models
import { User } from "../../models/User";
import { MySocial } from "../../models/MySocial";

// utils
import { customerKey, renderCustomer } from "../../utils/customer";
import { orderKey, renderOrder } from "../../utils/order";

// generic components
import List from "../List/List";
import { Summary } from "../Summary/Summary";
import { TabBar } from "../TabBar/TabBar";

export default function App() {
  const [selectedSocial, setSelectedSocial] = useState<MySocial>(socials[0]);

  function selectHandler(item: MySocial) {
    setSelectedSocial(item);
  }

  return (
    <>
      {/* List component */}
      <List
        items={customers}
        renderItem={renderCustomer}
        keyExtractor={customerKey}
      />
      <List items={orders} renderItem={renderOrder} keyExtractor={orderKey} />

      {/* Summary component */}
      {/* <Summary data={userData} property="name" /> */}
      {/* // * optional use of <User, "name"> for type checking clarity and safety */}
      <Summary<User, "name"> data={userData} property="name" />

      {/* TabBar component */}
      <div>
        <TabBar<MySocial>
          selectedItem={selectedSocial}
          items={socials}
          onTabClick={selectHandler}
        />

        <div className="border border-slate-200 border-solid rounded my-3 p-5">
          <a href={selectedSocial.link}>Visit {selectedSocial.name}</a>
        </div>
      </div>
    </>
  );
}
