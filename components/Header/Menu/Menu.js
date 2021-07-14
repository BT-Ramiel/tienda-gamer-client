import React, { useState, useEffect } from 'react'
import {
	Container,
	Menu as SemanticUIMenu,
	Grid,
	Icon,
} from 'semantic-ui-react'
import Link from 'next/link'
import BasicModal from '../../Modal/BasicModal/BasicModal'
import Auth from '../../Auth'
import useAuth from '../../../hooks/useAuth'
import { getMeAPI } from '../../../api/user'

export default function Menu() {
	const [showModal, setShowModal] = useState(false)
	const [titleModal, setTitleModal] = useState('Iniciar sesion')
	const { logout, auth } = useAuth()
	const [user, setUser] = useState(undefined)

	const onShowModal = () => setShowModal(true)
	const onCloseModal = () => {
		setShowModal(false)
	}

	useEffect(() => {
		;(async () => {
			const response = await getMeAPI(logout)
			setUser(response)
		})()
	}, [auth])

	return (
		<div className="menu">
			<Container>
				<Grid>
					<Grid.Column className="menu__left" width={6}>
						<MenuPlatforms />
					</Grid.Column>
					<Grid.Column className="menu__right" width={10}>
						{user !== undefined && (
							<MenuOptions
								onShowModal={onShowModal}
								user={user}
								logout={logout}
							/>
						)}
					</Grid.Column>
				</Grid>
			</Container>
			<BasicModal
				show={showModal}
				setShow={setShowModal}
				title={titleModal}
				animation={true}
				size="small">
				<Auth
					onCloseModal={onCloseModal}
					setTitleModal={setTitleModal}
				/>
			</BasicModal>
		</div>
	)
}

function MenuOptions({ onShowModal, user, logout }) {
	return (
		<SemanticUIMenu className="MenuOptions">
			{user ? (
				<>
					<Link href="/orders">
						<SemanticUIMenu.Item as="a" className="menu_item">
							<Icon name="game" />
							Mis pedidos
						</SemanticUIMenu.Item>
					</Link>
					<Link href="/wishlist">
						<SemanticUIMenu.Item as="a" className="menu_item">
							<Icon name="heart outline" />
							Wishlist
						</SemanticUIMenu.Item>
					</Link>
					<Link href="/account">
						<SemanticUIMenu.Item as="a" className="menu_item">
							<Icon name="user outline" />
							{user.name} {user.lastname}
						</SemanticUIMenu.Item>
					</Link>
					<Link href="/cart">
						<SemanticUIMenu.Item as="a" className="menu_item m-0">
							<Icon name="cart" />
						</SemanticUIMenu.Item>
					</Link>
					<SemanticUIMenu.Item
						className="menu_item m-0"
						onClick={logout}>
						<Icon name="power off" />
					</SemanticUIMenu.Item>
				</>
			) : (
				<SemanticUIMenu.Item
					className="menu_item"
					onClick={onShowModal}>
					<Icon name="user outline" />
					Mi cuenta
				</SemanticUIMenu.Item>
			)}
		</SemanticUIMenu>
	)
}

function MenuPlatforms() {
	return (
		<SemanticUIMenu className="MenuPlatforms">
			<Link href="/play-station">
				<SemanticUIMenu.Item className="menu_item" as="a">
					PlayStation
				</SemanticUIMenu.Item>
			</Link>
			<Link href="/xbox">
				<SemanticUIMenu.Item className="menu_item" as="a">
					Xbox
				</SemanticUIMenu.Item>
			</Link>
			<Link href="/switch">
				<SemanticUIMenu.Item className="menu_item" as="a">
					Switch
				</SemanticUIMenu.Item>
			</Link>
		</SemanticUIMenu>
	)
}
