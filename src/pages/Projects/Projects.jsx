import Index from "../../components/Layout/Index/Index";
import ProjectSection from "../../components/project/ProjectSection/ProjectSection";
import "./Project.css";

const Project = () => {
  return (
    <Index>
      <div className="project">
        <ProjectSection></ProjectSection>
      </div>
    </Index>
  );
};

export default Project;
