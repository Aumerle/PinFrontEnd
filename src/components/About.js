import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Button from "./Button";
import img from "../assets/img/MUJER 1.jpg";

export default function About() {
    return (
        <Container id="nosotros" className="py-5">
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Image src={img} fluid />
                </Col>
                <Col
                    lg={7}
                    md={6}
                    sm={12}
                    className="d-flex align-items-center"
                >
                    <div className="text-lg-end text-md-end text-center">
                        <h1 className="font-primary color-primary">
                            Acerca de nosotros
                        </h1>
                        <p className="font-secondary color-secondary py-6">
                            Somos una compañia Colombiana dedicada a la
                            fabricación y distribución de prendas en ORO
                            Italiano de 18K.
                        </p>

                        <a href="#contactanos">
                            {" "}
                            <Button text="Contáctanos" />{" "}
                        </a>
                    </div>
                </Col>
            </Row>

            <br />
            <div className="misionvision">

                <h3 className="font-primary color-primary" id="tituloMMisisision">
                    NUESTRO PROPÓSITO
                </h3>

            </div>

            <div className="misionvisiontexto">
                <p id="Mision" className="font-secondary color-secondary py-6">
                    Superarnos a nosotros mismos. Crear lujo contemporáneo
                    plasmado en el arte de la exclusividad. Diseñar joyas para
                    experimentar sensaciones únicas. Contar con equipos de
                    diseñadores y maestros orfebres estudiando constantemente
                    para hacer del arte de la joyeria colecciones exquisitas.
                </p>

            </div>
        </Container>
    );
}
