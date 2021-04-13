import React from 'react'
import { Container, Menu, Grid,  Icon, Label} from "semantic-ui-react";
import Link from "next/link";

export default function MyMenu() {
    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPLatforms/>
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        <MenuOptions/>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

function MenuOptions() {
    return(
        <Menu>
            <Menu.Item className="menu_item">
                <Icon name="user outline"/>
                Mi cuenta
            </Menu.Item>
        </Menu>      
    )
}

function MenuPLatforms() {
    return(
        <Menu>
            <Link href="/play-station">
                <Menu.Item className="menu_item" as="a">PlayStation</Menu.Item>
            </Link>
            <Link href="/xbox">
                <Menu.Item className="menu_item" as="a">Xbox</Menu.Item>
            </Link>
            <Link href="/switch">
                <Menu.Item className="menu_item" as="a">Switch</Menu.Item>
            </Link>
        </Menu>
    )
}
