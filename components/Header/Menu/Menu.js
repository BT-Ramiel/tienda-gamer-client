import { useState } from 'react'
import { Container, Menu as SemanticUIMenu, Grid,  Icon } from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal/BasicModal"

export default function Menu() {
    const [showModal, setShowModal] = useState(false);

    const onShowModal = () => setShowModal(true);

    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPLatforms/>
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        <MenuOptions onShowModal={onShowModal}/>
                    </Grid.Column>
                </Grid>
            </Container>
            <BasicModal show={showModal} setShow={setShowModal} title="Iniciar sesión" animation={true} size="small">

            </BasicModal>
        </div>
    )
}

function MenuOptions(props) {
    const { onShowModal } = props;

    return(
        <SemanticUIMenu>
            <SemanticUIMenu.Item className="menu_item" onClick={onShowModal}>
                <Icon name="user outline"/>
                Mi cuenta
            </SemanticUIMenu.Item>
        </SemanticUIMenu>      
    )
}

function MenuPLatforms() {
    return(
        <SemanticUIMenu>
            <Link href="/play-station">
                <SemanticUIMenu.Item className="menu_item" as="a">PlayStation</SemanticUIMenu.Item>
            </Link>
            <Link href="/xbox">
                <SemanticUIMenu.Item className="menu_item" as="a">Xbox</SemanticUIMenu.Item>
            </Link>
            <Link href="/switch">
                <SemanticUIMenu.Item className="menu_item" as="a">Switch</SemanticUIMenu.Item>
            </Link>
        </SemanticUIMenu>
    )
}
