import "./MobileProject.css";

import MSP from "../MobileSingleProject/MSP";

// images
import stazy from "../../assets/images/project_images/stazy_image.png";
import harmonish from "../../assets/images/project_images/harmonish_image.png";
import vox from "../../assets/images/project_images/vox_home_page.png";

const MobileProject = () => {
  const projectInfo = {
    stazy: {
      name: "stazy",
      img: stazy,
      des: "Stazy is an Express.js-based home rental platform that allows users to effortlessly browse and rent homes in any location. It offers a smooth  and intuitive interface for finding accommodations tailored to users' preferences and destinations.",
    },
    vox: {
      name: "vox",
      img: vox,
      des: "VOX is a full-stack MERN music streaming platform where users can search for songs, artists, and albums, stream music, and create custom playlists. It offers a smooth, responsive experience focused on fast browsing and personalized music discovery.",
    },
    artist: {
      name: "artist",
      img: harmonish,
      des: "HARMONISH is my personal music portfolio showcasing all the original tracks, remixes, and mashups I've produced as a music producer. Its a space where you can explore my creative sound journey and stay updated with my latest releases.",
    },
  };

  return (
    <div className="m-project">
      <MSP
        projectInfo={projectInfo.vox}
        linkTo={"https://github.com/NilanshuGarhewal/Vox-v1"}
      />

      <div className="m-divider"></div>

      <MSP
        projectInfo={projectInfo.stazy}
        linkTo={"https://github.com/NilanshuGarhewal/Stazy-Home-Rental-Site"}
      />

      <div className="m-divider"></div>

      <MSP
        projectInfo={projectInfo.artist}
        linkTo={"https://harmonishbeats.onrender.com/"}
      />

      <div className="m-divider"></div>
    </div>
  );
};

export default MobileProject;
