import { Container, Row } from "react-bootstrap";
import Collectionitem from "./Collectionitem";
import Img1 from "../assets/img/MUJER 2.jpg";
import Img2 from "../assets/img/MANOS ANILLOS.jpg";
import Img3 from "../assets/img/MUJER 3.jpg";
import Img4 from "../assets/img/MUJER 4.jpg";


export default function Collections() {
  return (
    <Container className="py-5">
      <h3 className="font-secondary color-primary fs-40">
        <u>Colección</u> <i class="bi bi-arrow-right"></i>
      </h3>
      <Row>
        <Collectionitem img={Img1} text="Cadenas" />
        <Collectionitem img={Img2} text="Anillos" />
        <Collectionitem img={Img3} text="Dijes" />
        <Collectionitem img={Img4} text="Aretes" />
       </Row>
    </Container>
  );
}
