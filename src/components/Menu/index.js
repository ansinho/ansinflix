import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button/index'
//import ButtonLink from './components/ButtonLink/index'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AnsinFlix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">Novo vídeo</Button>
        </nav>
    )
}


export default Menu