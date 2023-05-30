import { useState } from "react";
import orderImg from "../../../src/assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../Hooks/UseMenu";

import OrderTab from "../../Components/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "dessert", "soup", "offered", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabindex] = useState(initialIndex);

  const [menu] = UseMenu();

  // console.log(category);

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bristo Bos || Order</title>
      </Helmet>
      <Cover
        img={orderImg}
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
        <TabList className="uppercase my-12  flex justify-center ">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>deasserd</Tab>
          <Tab>shoup</Tab>
          <Tab>offered</Tab>
          <Tab>drings</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
