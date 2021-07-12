import { BASE_PATH } from '../utils/constants'
import { authFetch } from '../utils/fetch'

export async function RegisterAPI(formdata) {
	try {
		const url = `${BASE_PATH}/auth/local/register`
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formdata),
		}
		const response = await fetch(url, params)
		const result = await response.json()
		return result
	} catch (error) {
		console.log(error)
		return null
	}
}

export async function LoginAPI(formdata) {
	try {
		const url = `${BASE_PATH}/auth/local`
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formdata),
		}
		const response = await fetch(url, params)
		const result = await response.json()
		return result
	} catch (error) {
		console.log(error)
		return null
	}
}

export async function ResetPasswordAPI(email) {
	try {
		console.log(email)
		const url = `${BASE_PATH}/auth/forgot-password`
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email }),
		}
		const response = await fetch(url, params)
		const result = await response.json()
		return result
	} catch (error) {
		console.log(error)
		return null
	}
}

export async function getMeAPI(logout) {
	try {
		const url = `${BASE_PATH}/users/me`
		const result = await authFetch(url, null, logout)
		return result ? result : null
	} catch (error) {
		console.log(error)
		return error
	}
}
