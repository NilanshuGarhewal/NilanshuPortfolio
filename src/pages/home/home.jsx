import "./home.css";

import HeroSection from "../../components/home/HeroSection/HeroSection";
import Index from "../../components/Layout/Index/Index";
import HomeProject from "../../components/project/HomeProject/HomeProject";

function Home() {
  return (
    <Index>
      <div className="home">
        <HeroSection />
        <HomeProject />
      </div>
    </Index>
  );
}

export default Home;
