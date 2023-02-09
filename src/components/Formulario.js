import React, {useState} from 'react';

const Formulario = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');
	const [inputTelefono, cambiarInputTelefono] = useState('');
	const [inputMensaje, cambiarInputMensaje] = useState('');

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}
	const handleInputTelefono = (e) => {
		cambiarInputTelefono(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputMensaje = (e) => {
		cambiarInputMensaje(e.target.value);
	}

	return (
		<>
		<hr></hr>

			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
				<h1 className="font-primary color-secondary text-center my-4">
                Contáctanos
            </h1>
				</div>
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>
				<div>
					<label htmlFor="telefono">Teléfono</label>
					<input
						type="text"
						name="telefono"
						placeholder="Teléfono"
						id="telefono"
						value={inputTelefono}
						onChange={handleInputTelefono}
					/>
				</div>
				<div>
					<label htmlFor="mensaje">Mensaje</label>
					<input
						type="textarea"
						name="mensaje"
						placeholder="Mensaje"
						id="mensaje"
						style={{height: "100px"}  }
						value={inputMensaje}
						onChange={handleInputMensaje}
					/>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</>
	);
}
 
export default Formulario;