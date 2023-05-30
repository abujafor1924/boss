import { Helmet } from "react-helmet-async";
import Bannar from "./Bannar";
import ChefRecomendet from "./ChefRecomendet";
import FeatureMenu from "./FeatureMenu";
import FoodCategory from "./FoodCategory";
import PopularManu from "./PopularManu";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bristo Bos || Home</title>
      </Helmet>
      <Bannar></Bannar>
      <FoodCategory></FoodCategory>
      <PopularManu></PopularManu>
      <ChefRecomendet></ChefRecomendet>
      <FeatureMenu></FeatureMenu>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
