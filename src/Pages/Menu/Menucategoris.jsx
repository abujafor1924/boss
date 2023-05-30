import { Link } from "react-router-dom";
import ItemMenu from "../../Components/ItemMenu";
import Cover from "../Shared/Cover";
const Menucategoris = ({ items, coverImg, title, subTitle }) => {
  return (
    <div className="pt-0">
      {title && (
        <Cover img={coverImg} title={title} subTitle={subTitle}></Cover>
      )}

      <div className="grid md:grid-cols-2 gap-4 p-16  ">
        {items.map((item) => (
          <ItemMenu key={item._id} item={item}></ItemMenu>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline btn-info border-0 border-b-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default Menucategoris;
