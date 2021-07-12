import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { LoginAPI, ResetPasswordAPI } from '../../../api/user'
import useAuth from '../../../hooks/useAuth'

export default function LoginForm({
	showRegisterForm = null,
	onCloseModal = null,
}) {
	const [loading, setLoading] = useState(false)
	const { login } = useAuth()

	const { handleSubmit, handleChange, errors, setErrors, values } = useFormik(
		{
			initialValues: initialValues(),
			validationSchema: Yup.object(validationSchema()),
			onSubmit: async formData => {
				setLoading(true)
				const response = await LoginAPI(formData)
				if (response?.jwt && onCloseModal) {
					login(response.jwt)
					onCloseModal()
				} else toast.error('Email o contrasena incorrectos')
				setLoading(false)
			},
		}
	)

	const resetPassword = () => {
		setErrors({})
		const validateEmail = Yup.string().email().required()
		if (!validateEmail.isValidSync(values.identifier)) {
			setErrors({ identifier: true })
		} else {
			ResetPasswordAPI(values.identifier)
		}
	}

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
					<Button
						className="submit-button"
						type="submit"
						loading={loading}>
						Entrar
					</Button>
					<Button type="button" onClick={resetPassword}>
						Olvide mi contrasena
					</Button>
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
