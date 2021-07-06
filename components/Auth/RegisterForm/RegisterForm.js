import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { RegisterAPI } from '../../../api/user'
import { toast } from 'react-toastify'

export default function RegisterForm({ showLoginForm = null }) {
	const [loading, setLoading] = useState(false)
	const { handleSubmit, handleChange, errors } = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		onSubmit: async formData => {
			setLoading(true)
			const response = await RegisterAPI(formData)
			if (response?.jwt && showLoginForm) {
				toast.success('Registro realizado con exito')
				showLoginForm()
			} else
				toast.error('Error al registrar usuario, intentelo mas tarde')
			setLoading(false)
		},
	})

	return (
		<Form className="RegisterForm" onSubmit={handleSubmit}>
			<Form.Input
				name="name"
				type="text"
				placeholder="Nombre"
				onChange={handleChange}
				error={errors.name}
			/>
			<Form.Input
				name="lastname"
				type="text"
				placeholder="Apellidos"
				onChange={handleChange}
				error={errors.lastname}
			/>
			<Form.Input
				name="username"
				type="text"
				placeholder="Nombre de usuario"
				onChange={handleChange}
				error={errors.username}
			/>
			<Form.Input
				name="email"
				type="text"
				placeholder="Correo electronico"
				onChange={handleChange}
				error={errors.email}
			/>
			<Form.Input
				name="password"
				type="password"
				placeholder="Contrasena"
				onChange={handleChange}
				error={errors.password}
			/>
			<div className="buttons-container">
				<Button type="button" basic>
					Iniciar sesion
				</Button>
				<Button
					type="submit"
					className="submit-button"
					loading={loading}>
					Registrar
				</Button>
			</div>
		</Form>
	)
}

function initialValues() {
	return { name: '', lastname: '', username: '', email: '', password: '' }
}

function validationSchema() {
	return {
		name: Yup.string().required(true),
		lastname: Yup.string().required(true),
		username: Yup.string().required(true),
		email: Yup.string().email(true).required(true),
		password: Yup.string().required(true),
	}
}
