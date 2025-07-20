import "./MSP.css";

import { hover, motion } from "framer-motion";

const MSP = ({ projectInfo }) => {
  return (
    <motion.div className="m-project-wrapper">
      <div className="m-project-img">
        <img src={projectInfo.img} alt="hh" />
      </div>
      <div className="m-project-tools">
        <h1 className="m-project-heading">{projectInfo.name}</h1>
        <p className="m-project-des">{projectInfo.des}</p>

        <div className="m-view-button">
          <span>view {projectInfo.name}</span> <div className="m-red-dot"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default MSP;
