import { getToken } from '../api/token'
import { hasExpiredToken } from '../api/token'

export async function authFetch(url, params, logout) {
	const token = getToken()

	//usuario no logeado
	if (!token) {
		logout()
	}
	//usuario logeado
	else {
		//token caducado
		if (hasExpiredToken(token)) {
			logout()
		}
		//token vigente
		else {
			const paramsTemp = {
				...params,
				headers: {
					...params?.header,
					Authorization: `Bearer ${token}`,
				},
			}

			try {
				const response = await fetch(url, paramsTemp)
				const result = await response.json()
				return result
			} catch (error) {
				console.log(error)
				return error
			}
		}
	}
}
