import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import imgBg from "../../../src/assets/menu/banner3.jpg";
import imgDessert from "../../../src/assets/menu/dessert-bg.jpeg";
import imgPizza from "../../../src/assets/menu/pizza-bg.jpg";
import UseMenu from "../../Hooks/UseMenu";
import Menucategoris from "./Menucategoris";
import TitleHading from "../../Components/TitleHading";

const Menu = () => {
  const [menu] = UseMenu();

  const dessertItem = menu.filter((item) => item.category === "dessert");
  const soupItem = menu.filter((item) => item.category === "soup");
  const saladItem = menu.filter((item) => item.category === "salad");
  const pizzaItem = menu.filter((item) => item.category === "pizza");
  const offeredItem = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bristo Bos || Menu</title>
      </Helmet>
      <Cover
        img={imgBg}
        title={"our menu"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <TitleHading
        subHading={"Don't miss"}
        hading={"TODAY'S OFFER"}
      ></TitleHading>
      <Menucategoris items={offeredItem}></Menucategoris>
      <Menucategoris
        items={dessertItem}
        coverImg={imgDessert}
        title={"dessert"}
      ></Menucategoris>
      <Menucategoris
        items={pizzaItem}
        coverImg={imgPizza}
        title={"pizza"}
      ></Menucategoris>
      <Menucategoris
        items={soupItem}
        coverImg={imgPizza}
        title={"soup"}
      ></Menucategoris>
      <Menucategoris
        items={saladItem}
        coverImg={imgPizza}
        title={"salad"}
      ></Menucategoris>
    </div>
  );
};

export default Menu;
