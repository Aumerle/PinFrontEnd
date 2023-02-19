import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container} from "react-bootstrap";

const endpoint = 'http://localhost/pinbackend/public/index.php/api/insertContacts'
const InsertContact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, email: email, phone: phone, message: message})
        navigate('/')

    }
  return (
      <div>
          
              <h1
                  id="contactanos"
                  className="font-primary color-secondary text-center my-4"
              >
                  Contáctanos
              </h1>

                <form onSubmit={store}>
                <Container>
                  <div className="mb-3">
                      <label className="form-label">Nombre</label>
                      <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Nombre"
                      />
                  </div>

                  <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Email"
                      />
                  </div>

                  <div className="mb-3">
                      <label className="form-label">Teléfono</label>
                      <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Teléfono"
                      />
                  </div>

                  <div className="mb-3">
                      <label className="form-label">Mensaje</label>
                      <input
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          as="textarea"
                          className="form-control"
                          type="textarea"
                          placeholder="Mensaje"
                          style={{ height: "100px" }}
                      />
                  </div>
                  

                   <button type="submit" className="btn btn-success">
                      Enviar
                  </button>
                  </Container>
              </form>
          
      </div>
  );
}

export default InsertContact