import React from 'react'

export default function LoginForm({ showRegisterForm = null }) {
	return (
		<div>
			<h1>Formulario de login</h1>
			<button onClick={showRegisterForm}>Ir al registro</button>
		</div>
	)
}
