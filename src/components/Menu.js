import { Navbar, Nav, Container } from "react-bootstrap";


export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#" className="font-primary color-primary fs-32">QIUIBUSINESS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="color-primary font-secondary fs-16 ms-lg-5 ms-md-5 ms-0" href="#collections">Productos</Nav.Link>
            <Nav.Link className="color-primary font-secondary fs-16 ms-lg-5 ms-md-5 ms-0" href="#products">Nosotros</Nav.Link>
            <Nav.Link className="color-primary font-secondary fs-16 ms-lg-5 ms-md-5 ms-0" href="#About">Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
