import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button/index'
//import ButtonLink from './components/ButtonLink/index'

function Menu() {
    return (
        <nav className="Menu">
            <a to="/">
                <img className="Logo" src={Logo} alt="AnsinFlix" />
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo vídeo</Button>
        </nav>
    )
}


export default Menu