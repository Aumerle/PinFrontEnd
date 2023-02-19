import React from "react";
import styled from "styled-components";
import { Col, Image } from "react-bootstrap/";



export default function Collectionitem(props) {
  const { img,text } = props;

  //Bordes de imagenes de "En las redes hablan de QIUBUSINESS"
  const Box = styled.div`
    position: absolute;
    width: 216px;
    height: 254px;
    background-color: rgba(11, 12, 13, 0.2);
    border: 3px solid #C68230 ;
    transition: all 0.4s;

    @media (max-width:414px){
      width: 174px;
      height: 212px;
    }

  `;

  const Item = styled.div`
    cursor: pointer;
    transition: all 0.4s;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 216px;
    height: 254px;
    transition: all 0.4s;

    @media (max-width:414px){
      width: 174px;
      height: 212px;
    }

    img {
      position: relative;
      width: 100%;
      height: 100%;
    }

    :hover > ${Box} {
      background-color: rgba(198, 130, 48, 0.3);
      border: none;
      transition: all 0.3s;
      }

    p {
      position: absolute;
      display: none;
      font-weight: 600;
      color:white;
    }
    :hover img {
      filter: blur(8px);
      transition: all 0.8s;
    }

    :hover p {
      display: block;
      transition: all 0.4s;
    }
  `;

  return (
    <Col
      lg={3}
      md={3}
      sm={6}
      xs={6}
      className="g-4 d-flex justify-content-center"
    >
      <Item>
        <Image src={img} fluid />
        <p className="font-primary fs-32">{text}</p>
        <Box />
      </Item>
    </Col>
  );
}
