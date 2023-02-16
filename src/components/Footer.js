import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
  const Line = styled.div`
    border-top: 2.5px solid #C68230 ;
    margin-top:20px;
  `;

  return (
    <>
      <Line />
      <Container className="py-5">
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h1 className="font-primary color-primary text-lg-start text-md-start text-center">QIUBUSINESS</h1>
            <p className="font-secondary color-secondary text-lg-start text-md-start text-center">Estamos en el mercado para quedarnos, nos respalda la confianza de nuestros clientes que han vivido esta experiencia con nosotros, ayudandonos a construir solidamente la seguridad y el buen nombre. </p>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6} className="font-secondary color-secondary">
            <h4><u>Soporte</u></h4>
            <p>PQRS</p>
            <p>Envíos y devoluciones</p>
            <p>Garantía</p>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6} className="font-secondary color-secondary">
            <h4><u>Contáctos</u></h4>
            <p><i class="bi bi-telephone"></i> +57 318 690 8952</p>
            <p><i class="bi bi-envelope"></i> infoQIU@qiubussines.com</p>
            <p><i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i> <i class="bi bi-twitter"></i></p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
