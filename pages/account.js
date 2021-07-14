import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import BasicLayout from '../layouts/BasicLayout'
import useAuth from '../hooks/useAuth'
import { getMeAPI } from '../api/user'
import ChangeNameForm from '../components/Account/ChangeNameForm/ChangeNameForm'

export default function account() {
	const [user, setUser] = useState(undefined)
	const { auth, logout } = useAuth()
	const router = useRouter()

	useEffect(() => {
		;(async () => {
			const response = await getMeAPI(logout)
			setUser(response || null)
		})()
	}, [auth])

	//si la peticion no ha terminado
	if (user === undefined) return null

	//si el usuario no esta logeado
	if (!auth && !user) {
		router.replace('/')
		return null
	}

	return (
		<BasicLayout className="account">
			<Configuration user={user} logout={logout} />
		</BasicLayout>
	)
}

function Configuration({ user }) {
	return (
		<div className="account__configuration">
			<div className="title">Configuracion</div>
			<div className="data">
				<ChangeNameForm user={user} />
			</div>
		</div>
	)
}
