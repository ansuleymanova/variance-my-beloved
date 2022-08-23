import { useState } from 'react';
import Menu from './Menu.js';

export default function RightSidebar () {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
    let sidebarClassName = `sidebar sidebar_type_right ${isBurgerMenuOpen ? "sidebar_open" : ""}`;

    function onBurgerMenuClick() {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    }

    function onSidebarClick() {
        if (isBurgerMenuOpen) {
            setIsBurgerMenuOpen(false);
        }
    }

    return(
        <div className={sidebarClassName} onClick={onSidebarClick}>
            <button className="sidebar__menu-button" onClick={onBurgerMenuClick}></button>
            {isBurgerMenuOpen ? <Menu /> : ""}
        </div>
    )
}