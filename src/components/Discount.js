import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Button from "./Button";
import cover from "../assets/img/FondoLogo.jpg";

export default function Discount() {
  const Discount = styled.div`
    background-image: url(${cover});
    background-size: cover;
    height: 180px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    @media (max-width: 414px) {
      justify-content: center;
      height: 160px;
    }
  `;

  const Box = styled.div`
    height: 180px;
    width: 100%;
    background: linear-gradient(
      270deg,
      rgba(198, 130, 48, 0.5) 0%,
      rgba(11, 12, 13, 0.1) 100%
    );
    position: absolute;

    @media (max-width: 414px) {
      margin-right: 0rem;
      background: rgba(109, 235, 181, 0.2);
      height: 160px;
    }
  `;

  const DiscText = styled.div`
    z-index: 1;
    margin-right: 5rem;
    @media (max-width: 414px) {
      margin-right: 0rem;
    }
  `;

  return (
    <Container className="py-c">
      <Discount>
        <Box />
        <DiscText>
          <p className="font-primary color-secondary fs-20">
            Descuento 50%
            <br />
            Prendas seleccionadas
          </p>
          <a href="https://docdro.id/XGApni8" rel="noopener noreferrer" target="_blank"><Button text="+Info" color="white" /></a>
        </DiscText>
      </Discount>
    </Container>
  );
}
