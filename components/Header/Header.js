import React from 'react'
import TopBar from "./TopBar/TopBar"
import MyMenu from "./Menu/MyMenu";

export default function Header() {
    return (
        <div className="header">
            <TopBar/>
            <MyMenu/>
        </div>
    )
}
