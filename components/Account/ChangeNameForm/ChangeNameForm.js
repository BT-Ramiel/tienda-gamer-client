import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { updateNameAPI } from '../../../api/user'

export default function ChangeNameForm({ user, logout }) {
	const [loading, setLoading] = useState(false)

	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: initialValues(user.name, user.lastname),
		validationSchema: Yup.object(validationSchema()),
		onSubmit: async formData => {
			setLoading(true)
			const response = await updateNameAPI(user.id, formData, logout)
			if (!response) toast.error('Error al actualizar nombre y apellidos')
			else toast.success('Nombre actualizado')
			setLoading(false)
		},
	})

	return (
		<div className="ChangeNameForm">
			<h4>Cambia tu nombre y apellidos</h4>
			<Form onSubmit={handleSubmit}>
				<Form.Group widths="equal">
					<Form.Input
						name="name"
						placeholder="Tu nuevo nombre"
						value={values.name}
						onChange={handleChange}
						error={errors.name}
					/>
					<Form.Input
						name="lastname"
						placeholder="Tus nuevos apellidos"
						value={values.lastname}
						onChange={handleChange}
						error={errors.lastname}
					/>
				</Form.Group>
				<Button
					type="submit"
					className="submit-button"
					loading={loading}>
					Actualizar
				</Button>
			</Form>
		</div>
	)
}

function initialValues(name, lastname) {
	return { name: name || '', lastname: lastname || '' }
}

function validationSchema() {
	return {
		name: Yup.string().required(true),
		lastname: Yup.string().required(true),
	}
}
