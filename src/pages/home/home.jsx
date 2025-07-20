import "./home.css";

import HeroSection from "../../components/home/HeroSection/HeroSection";
import Index from "../../components/Layout/Index/Index";
import HomeProject from "../../components/project/HomeProject/HomeProject";

import Mobile from "../../Mobile/Mobile";
import MobileProject from "../../Mobile/MobileProject/MobileProject";

import { useIsMobile } from "../../Logic/Mobile";

function Home() {
  const isMobile = useIsMobile();

  // mobile
  if (isMobile == true) {
    return (
      <Index>
        <div className="home">
          <Mobile />
          <MobileProject />
        </div>
      </Index>
    );
  }

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
