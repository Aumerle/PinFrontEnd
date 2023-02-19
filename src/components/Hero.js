import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Button from "./Button";
import img from "../assets/img/LOGOTIPO.png";

export default function Hero() {
  return (
    
      <Container className="py-5">
        <Row>
          <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
            <div className="text-lg-start text-md-start text-center">
              <h1 className="font-primary color-primary">
                ¡Queremos brillar contigo!
              </h1>
              <p className="font-secondary color-secondary py-3">
                Somos una compañia Colombiana dedicada a la fabricación y distribución
                de prendas en ORO Italiano de 18K.{" "}
              </p>
              <a href="#contactanos"><Button text="Escribenos" icon="bi bi-arrow-right" /></a>
            </div>
          </Col>
          <Col lg={4} md={6} className="d-none d-lg-block" >
            <Image src={img} fluid />
          </Col>
        </Row>
      </Container>
  );
}
