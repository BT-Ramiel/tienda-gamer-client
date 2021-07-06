import React, { useMemo, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import '../scss/global.scss'
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css'
import AuthContext from '../context/AuthContext'
import jwtDecode from 'jwt-decode'
import { setToken, getToken } from '../api/token'

export default function MyApp({ Component, pageProps }) {
	const [auth, setAuth] = useState(undefined)
	const [reloasUser, setReloadUser] = useState(false)

	const login = token => {
		setToken(token)
		setAuth({ token, idUser: jwtDecode(token).id })
	}

	const authData = useMemo(
		() => ({
			auth,
			login,
			logout: () => null,
			setReloadUser,
		}),
		[auth]
	)

	useEffect(() => {
		const token = getToken()
		if (token) setAuth({ token, idUser: jwtDecode(token).id })
		else setAuth(null)
		setReloadUser(false)
		return () => {}
	}, [reloasUser])

	if (auth === undefined) return null

	return (
		<AuthContext.Provider value={authData}>
			<Component {...pageProps} />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
		</AuthContext.Provider>
	)
}
