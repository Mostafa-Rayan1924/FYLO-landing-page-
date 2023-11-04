import Features from "../component/Features";
import GetStarted from "../component/GetStarted";
import Hero from "../component/Hero";
import People from "../component/People";
import StayProductive from "../component/StayProductive";

const Home = () => {
  return (
    // hero section
    <>
      <Hero />
      {/* features */}
      <Features />
      {/* stay pro */}
      <StayProductive />
      {/* people */}
      <People />
      {/* get start */}
      <GetStarted />
    </>
  );
};

export default Home;
