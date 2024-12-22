import Banner from "../component/Banner";
import FeatureSection from "../component/Features";
import FAQsection from "../component/FAQsection";
const Homepage = () => {
  return (
    <div className="bg-backGround dark:bg-darkBg">
      <Banner />
      <FeatureSection />
      <FAQsection />
    </div>
  );
};

export default Homepage;
