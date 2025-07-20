import "./HeroLower.css";

import MyFirstName from "../MyFirstName/MyFirstName";
import MyImage from "../MyImage/MyImage";
import MyBio from "../MyBio/MyBio";
import MyLastName from "../MyLastName/MyLastName";

import img from "../../../assets/images/error.gif";

export default function HeroLower({ showBio, handleShowBio }) {
  return (
    <div className="hero-lower">
      <MyFirstName showBio={showBio} handleShowBio={handleShowBio} />

      <MyImage showBio={showBio} img={img} />

      <MyBio showBio={showBio} />

      <MyLastName showBio={showBio} />
    </div>
  );
}
