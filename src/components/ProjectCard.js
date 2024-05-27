import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectCard({ project }) {
  return (
    <Card
      className="project-card"
      style={{ width: "20rem" }}
      bg={"dark"}
      text={"white"}
    >
      <hr></hr>
      <Card.Img variant="top" src={project.imgsrc} />
      <hr></hr>
      <Card.Body>
        <Card.Title style={{ fontSize: "28px" }}>{project.title}</Card.Title>
        <Card.Text>{project.text}</Card.Text>
      </Card.Body>
      <a href={project.source} >
          <Button variant="primary" className="project-btn">Source</Button>
        </a>
    </Card>
  );
}

export default ProjectCard;
