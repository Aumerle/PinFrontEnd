import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function FormGroupExample() {
    return (
        <Container>
            <hr></hr>
            <h1 className="font-primary color-secondary text-center my-4">
                Contáctanos
            </h1>
            
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="name" placeholder="Nombre" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Correo" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                        as="textarea"
                        type="textarea"
                        placeholder="Mensaje"
                        style={{ height: "100px" }}
                    />
                </Form.Group>
                <Button submit>Enviar</Button>
            </Form> <br/><br/>
        </Container>
    );
}

export default FormGroupExample;
