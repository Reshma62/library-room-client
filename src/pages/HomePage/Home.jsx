import useAuthContext from "../../Hooks/useAuthContext";
import Banner from "../../components/Home/Banner";
import Category from "../../components/Home/Category";
import OurFeature from "../../components/Home/OurFeature";
import Testimonial from "../../components/Home/TEstimonial";

const Home = () => {
  const usr = useAuthContext();
  console.log(usr);
  return (
    <>
      <Banner />
      <OurFeature />
      <Category />
      <Testimonial />
    </>
  );
};

export default Home;
