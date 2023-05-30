import TitleHading from "../../Components/TitleHading";

import ItemMenu from "../../Components/ItemMenu";
import UseMenu from "../../Hooks/UseMenu";

const PopularManu = () => {
  const [menu] = UseMenu();
  const popularitem = menu.filter((item) => item.category === "popular");

  return (
    <div className="p-8">
      <TitleHading
        subHading={"Check it out"}
        hading={"FROM OUR MENU"}
      ></TitleHading>
      <div className="grid md:grid-cols-2 gap-4 ">
        {popularitem.map((item) => (
          <ItemMenu key={item._id} item={item}></ItemMenu>
        ))}
      </div>
    </div>
  );
};

export default PopularManu;
