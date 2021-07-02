import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default function RegisterForm({ showLoginForm = null }) {
	return (
		<Form className="RegisterForm">
			<Form.Input name="name" type="text" placeholder="Nombre" />
			<Form.Input name="lastname" type="text" placeholder="Apellidos" />
			<Form.Input
				name="username"
				type="text"
				placeholder="Nombre de usuario"
			/>
			<Form.Input
				name="email"
				type="text"
				placeholder="Correo electronico"
			/>
			<Form.Input
				name="password"
				type="password"
				placeholder="Contrasena"
			/>
			<div className="buttons-container">
				<Button type="button" basic>
					Iniciar sesion
				</Button>
				<Button type="submit" className="submit-button">
					Registrar
				</Button>
			</div>
		</Form>
	)
}
