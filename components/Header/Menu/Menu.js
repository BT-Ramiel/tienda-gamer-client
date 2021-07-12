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

	const onShowModal = () => setShowModal(true)
	const onCloseModal = () => {
		setShowModal(false)
	}

	return (
		<div className="menu">
			<Container>
				<Grid>
					<Grid.Column className="menu__left" width={6}>
						<MenuPlatforms />
					</Grid.Column>
					<Grid.Column className="menu__right" width={10}>
						{auth ? (
							<button onClick={logout}>Cerrar sesion</button>
						) : (
							<MenuOptions onShowModal={onShowModal} />
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

function MenuOptions(props) {
	const { onShowModal } = props

	return (
		<SemanticUIMenu>
			<SemanticUIMenu.Item className="menu_item" onClick={onShowModal}>
				<Icon name="user outline" />
				Mi cuenta
			</SemanticUIMenu.Item>
		</SemanticUIMenu>
	)
}

function MenuPlatforms() {
	return (
		<SemanticUIMenu>
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
