import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import Links from './links.json'

export const NavBar: React.FC = () => {
    return (
        <nav className="nav-extended  indigo darken-1 mb-5">
            <div className="nav-wrapper">
            <NavLink to="/" className="logo"><h5>Сашкины рекомендашки</h5></NavLink>
            </div>
            
            <div className="nav-content indigo lighten-2">
                <ul className="tabs tabs-transparent">
                    {Links.map(element => {
                        return (
                            <li key={element.label} className="tab"><NavLink to={element.link} activeClassName="active">{element.label}</NavLink></li> 
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}