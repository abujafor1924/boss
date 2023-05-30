import TitleHading from "../../Components/TitleHading";
import "./css/feature.css";

const FeatureMenu = () => {
  return (
    <div className="p-8 feature text-white">
      <TitleHading
        subHading={"Check it out"}
        hading={"FROM OUR MENU"}
      ></TitleHading>
      <div className="md:flex justify-center gap-10 items-center pb-20 pt-12 px-36">
        <div>
          <img src="../../../src/assets/home/featured.jpg" alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolorem minima qui temporibus facilis eaque commodi suscipit
            repellat! Molestias hic eum suscipit quis fuga, laborum dolorum eos
            maxime aliquam laudantium sed dolore iure dignissimos repudiandae
            molestiae quod in aut deserunt neque libero ex adipisci laboriosam
            aperiam! Modi mollitia temporibus laborum!
          </p>
          <button className="btn btn-outline btn-info border-0 border-b-4">
            Read Mor
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureMenu;
