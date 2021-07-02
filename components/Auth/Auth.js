import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function Auth({ onCloseModal = null, setTitleModal = null }) {
	const [showLogin, setShowLogin] = useState(true)
	const showLoginForm = () => {
		setTitleModal('Iniciar sesion')
		setShowLogin(true)
	}
	const showRegisterForm = () => {
		setTitleModal('Crear nuevo usuario')
		setShowLogin(false)
	}

	return showLogin ? (
		<LoginForm showRegisterForm={showRegisterForm} />
	) : (
		<RegisterForm showLoginForm={showLoginForm} />
	)
}
