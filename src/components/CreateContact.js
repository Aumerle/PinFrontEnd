import axios from "axios";
import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
//import { useNavigate } from 'react-router-dom'
import Form from "react-bootstrap/Form";

const endpoint = "http://localhost:8000/api/contact";
const CreateContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    //const [address, setAddress] = useState('')
    //const [age, setAge] = useState('')
    //const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, { name: name });
        // navigate('/')
    };

    return (
        <div>
            <Container>
                <h1
                    id="contactanos"
                    className="font-primary color-secondary text-center my-4"
                >
                    Contáctanos
                </h1>

                <Form.Group>
                    <form onSubmit={store}>
                        <div className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>

                        <div className="mb-3">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                placeholder="Correo" 
                            />
                        </div>

                        <div className="mb-3">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control                            
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Teléfono" 
                            />
                        </div>

                        <div className="mb-3">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                as="textarea"
                                className="form-control"
                                type="textarea"
                                placeholder="Mensaje"
                                style={{ height: "100px" }}
                            />
                        </div>
                        <Button submit>Enviar</Button>
                        
                    </form>
                </Form.Group>
            </Container>
            
        </div>
    );
};

export default CreateContact;

//Esta es otra forma de colocar el Boton de enviar
//<button type='submit' className='btn btn-success'>Enviar</button>
