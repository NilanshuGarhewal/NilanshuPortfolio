import "./HeroLower.css";

import MyFirstName from "../MyFirstName/MyFirstName";
import MyImage from "../MyImage/MyImage";
import MyBio from "../MyBio/MyBio";
import MyLastName from "../MyLastName/MyLastName";

import img from "../../../assets/images/image.jpg";

export default function HeroLower({ showBio, handleShowBio, isMobile }) {
  return (
    <div className="hero-lower">
      <MyFirstName
        showBio={showBio}
        handleShowBio={handleShowBio}
        isMobile={isMobile}
      />

      <MyImage showBio={showBio} img={img} isMobile={isMobile} />

      <MyBio showBio={showBio} isMobile={isMobile} />

      <MyLastName showBio={showBio} isMobile={isMobile} />
    </div>
  );
}
