import Banner from "../component/Banner";
import FeatureSection from "../component/Features";
import FAQsection from "../component/FAQsection";
import AboutEdulink from "../component/AboutEdulink";
const Homepage = () => {
  return (
    <div className="bg-primaryColor/5 dark:bg-darkBg">
      <Banner />
      <AboutEdulink />
      <FeatureSection />
      <FAQsection />
    </div>
  );
};

export default Homepage;
