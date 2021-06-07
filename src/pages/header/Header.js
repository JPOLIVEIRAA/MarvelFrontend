import React from 'react'
import {NavLink} from 'react-router-dom'
import { AreaHeader } from './styled'
import { useHistory } from 'react-router'

function Header(){

    const history = useHistory()
    const logout = () =>{
        localStorage.removeItem("marvelToken")
        localStorage.removeItem("marvelUser")
        history.push('/')
    }
    return (
        <>
        <AreaHeader>
        <div className="container">
            <div className="logo">
                <img src="../../assets/marvel.jpg" alt="img"/>     
            </div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" exact>Início</NavLink>
                        </li>
                        <li> 
                            <NavLink to="/usuarios">Usuários cadastrados</NavLink>
                        </li>
                        <li>  
                            <NavLink to="/adicionar">Adicionar usuários</NavLink>
                        </li>
                        <li>  
                            <p onClick={logout}>Sair</p>
                        </li>
                    </ul>
                </nav>
            </header>
            </div>
            </AreaHeader>
            
            </>
    )
}

export default Header;