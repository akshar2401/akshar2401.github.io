import * as React from "react";
import Container from "../../../node_modules/react-bootstrap/esm/Container";
import Row from "../../../node_modules/react-bootstrap/esm/Row";
import Col from "../../../node_modules/react-bootstrap/esm/Col";
import { Constants } from "../../Misc";
import ImagesForCarousel from "./ImagesForCarousel";
import { ImagesCarousel } from "../ImagesCarousel";

const AboutInternal: React.FC<any> = () => {
  return (
    <Container
      className="mt-3 flex-grow-1"
      style={{ width: "90%" }}
      id={Constants.AboutContainerId}
    >
      <Row className="text-light justify-content-lg-between">
        <Col
          xs={{ span: 12, offset: 0 }}
          lg={{ span: 6 }}
          className="mx-auto my-auto pt-2 pb-2"
        >
          <h3>Hello, Akshar here!</h3>
          <p style={{ lineHeight: "1.8rem" }}>
            I recently graduated with a Bachelors of Science in Computer Science
            from{" "}
            <a
              href="https://www.csus.edu/"
              target="_blank"
              className="text-light fw-bold"
              title="Link to my university"
            >
              California State University, Sacramento
            </a>
            . As a Software Engineer at{" "}
            <a
              href="https://www.microsoft.com/en-us/"
              target="_blank"
              className="text-light fw-bold "
              title="Link to my current company"
            >
              Microsoft
            </a>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="1.5rem"
              width="1.5rem"
              fill="white"
            >
              <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z" />
            </svg>
            , I am currently working on Pro Developer and Advanced Maker tooling
            and experiences for Microsoft Power Platform and Power Apps. My
            recent technology stack includes C#, React, Typescript, Javascript,
            Redux, VSCode Extension, Language Server Protocol, Language Servers,
            NodeJS, PowerFx, Compilers.
            <br /> <br />I am highly passionate about compiler theory and study
            and work on them in my free time. I've also worked in many different
            areas of technology such as Machine Learning, Full Stack
            Development, Mobile App Development, QA Automation, Compilers, and
            Data Science. I am currently learning Rust, Go and their
            applications in infrastructure development.
            <br /> <br />
            Thank you for your interest in my profile! You can get a hold of me
            on my{" "}
            <a
              href={Constants.LinkedinURL}
              target="_blank"
              title={Constants.VisitLinkedinAction}
            >
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x text-light" />
                <i className="fa fa-linkedin fa-stack-1x text-dark"></i>
              </span>
            </a>{" "}
            or by reaching out to me at{" "}
            <a
              href={Constants.EmailURL}
              target="_blank"
              title={Constants.EmailMeAction}
            >
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x text-light" />
                <i className="fa fa-envelope fa-stack-1x text-dark"></i>
              </span>
            </a>
            .
          </p>
        </Col>
        <Col
          id="imagesCarousel"
          xs={{ span: 12, offset: 0 }}
          md={{ span: 8 }}
          lg={{ span: 5 }}
          className="mx-auto my-auto"
        >
          <ImagesCarousel images={ImagesForCarousel}></ImagesCarousel>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutInternal;
