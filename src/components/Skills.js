import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                As a Front-End Developer, I bring a versatile set of skills that
                enable me to create engaging, responsive, and high-performance
                web applications. My expertise spans across various technologies
                and practices, ensuring top-notch user experiences.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>HTML5 & CSS3</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Responsive Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Data structures and Algorithms</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-img-left" src={colorSharp} alt="" />
    </section>
  );
};
