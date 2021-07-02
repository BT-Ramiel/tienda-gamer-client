import { useState } from 'react'
import {
	Container,
	Menu as SemanticUIMenu,
	Grid,
	Icon,
} from 'semantic-ui-react'
import Link from 'next/link'
import BasicModal from '../../Modal/BasicModal/BasicModal'
import Auth from '../../Auth'

export default function Menu() {
	const [showModal, setShowModal] = useState(false)
	const [titleModal, setTitleModal] = useState('Iniciar sesion')

	const onShowModal = () => setShowModal(true)
	const onCloseModal = () => {
		setShowModal(false)
	}

	return (
		<div className='menu'>
			<Container>
				<Grid>
					<Grid.Column className='menu__left' width={6}>
						<MenuPlatforms />
					</Grid.Column>
					<Grid.Column className='menu__right' width={10}>
						<MenuOptions onShowModal={onShowModal} />
					</Grid.Column>
				</Grid>
			</Container>
			<BasicModal
				show={showModal}
				setShow={setShowModal}
				title={titleModal}
				animation={true}
				size='small'>
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
			<SemanticUIMenu.Item className='menu_item' onClick={onShowModal}>
				<Icon name='user outline' />
				Mi cuenta
			</SemanticUIMenu.Item>
		</SemanticUIMenu>
	)
}

function MenuPlatforms() {
	return (
		<SemanticUIMenu>
			<Link href='/play-station'>
				<SemanticUIMenu.Item className='menu_item' as='a'>
					PlayStation
				</SemanticUIMenu.Item>
			</Link>
			<Link href='/xbox'>
				<SemanticUIMenu.Item className='menu_item' as='a'>
					Xbox
				</SemanticUIMenu.Item>
			</Link>
			<Link href='/switch'>
				<SemanticUIMenu.Item className='menu_item' as='a'>
					Switch
				</SemanticUIMenu.Item>
			</Link>
		</SemanticUIMenu>
	)
}
