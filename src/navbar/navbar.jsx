import {useState} from "react";
import { Link } from 'react-router-dom'
import { Navbar_Style, Delimiter } from "./navbar.styled";

export const Navbar = () => {
    return (
        <Navbar_Style>
            <p><Link to = "/" style={{ color: 'inherit', textDecoration: 'inherit'}}>HOME</Link></p>
            <Delimiter/>
            <p><Link to ="shop" style={{ color: 'inherit', textDecoration: 'inherit'}}>SHOP</Link></p>
        </Navbar_Style>
    )
}