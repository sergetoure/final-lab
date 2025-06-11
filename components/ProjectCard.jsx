import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectCard = ({ title, description, image }) => {
  return (
    <>
      <div className="card">
        <img
          src={image}
          alt="Project"
          style={{ width: "350px", borderRadius: "0 0 10px 10px" }}
        />
        <h2>{title}</h2>
        <p>{description} </p>
        <p>
          <span
            style={{ fontWeight: "bold", padding: "5px", cursor: "pointer" }}
          >
            View Project
          </span>
          <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </div>
    </>
  );
};

export default ProjectCard;
