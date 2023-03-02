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
            <h1 className="font-primary color-primary text-lg-start text-md-start text-center"> <a href="#inicio" id="letrafooter" >QIUBUSINESS</a> </h1>
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
            <p><a href="https://api.whatsapp.com/send?phone=3163422771&text=QIUBUSINESS,%20TU%20JOYERIA!" rel="noopener noreferrer" target="_blank" id="letrafooter" title="Chatea con QiuBusiness"><i class="bi bi-telephone"></i> +57 318 690 8952</a></p>
            <p><a href="mailto:aumerlebarbosapineda@gmail.com" rel="noopener noreferrer" target="_blank" id="letrafooter" title="Escríbenos por correo"> <i class="bi bi-envelope"></i> infoQIU@qiubussines.com</a></p>
            
            <p>
              <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank" id="letrafooter"> <i class="bi bi-instagram"></i></a>
              <a href="https://twitter.com/?lang=es" rel="noopener noreferrer" target="_blank" id="letrafooter"> <i class="bi bi-twitter"></i></a>
              <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank" id="letrafooter"> <i class="bi bi-facebook"></i></a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
