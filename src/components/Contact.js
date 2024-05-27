import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

export const Contact = () => {

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm("service_s311c44", "template_p73k9v9", form.current, {
        publicKey: "5N8lYTGW4Kpe6QGGw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus({success:true,message:'Message sent successfully'});
          setButtonText("Send");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus({success:false,message:'Something went wrong, Please Try again later'});
          setButtonText("Send");
        }
      );
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact-us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={sendEmail} ref={form}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input type="text" placeholder="Last Name" name="last_name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" placeholder="Email" name="your_email" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" placeholder="Phone no" name="phone" />
                </Col>
                <Col>
                  <textarea rows={6} placeholder="Message" name="message" />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
