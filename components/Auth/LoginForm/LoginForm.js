import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

export default function LoginForm({ showRegisterForm = null }) {
	const { handleSubmit, handleChange, errors } = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		onSubmit: async formData => {
			console.log(formData)
		},
	})

	return (
		<Form className="LoginForm" onSubmit={handleSubmit}>
			<Form.Input
				name="identifier"
				type="text"
				placeholder="Correo electronico"
				onChange={handleChange}
				error={errors.identifier}
			/>
			<Form.Input
				name="password"
				type="password"
				placeholder="Contrasena"
				onChange={handleChange}
				error={errors.password}
			/>
			<div className="buttons-container">
				<Button type="button" basic onClick={showRegisterForm}>
					Registrarse
				</Button>
				<div>
					<Button className="submit-button" type="submit">
						Entrar
					</Button>
					<Button type="button">Olvide mi contrasena</Button>
				</div>
			</div>
		</Form>
	)
}

function initialValues() {
	return { identifier: '', password: '' }
}

function validationSchema() {
	return {
		identifier: Yup.string().email(true).required(true),
		password: Yup.string().required(true),
	}
}
