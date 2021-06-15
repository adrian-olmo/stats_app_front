import React, { Component, useEffect, useState } from "react";
import './Navbar.css'
import { Link, useHistory } from "react-router-dom";
import { getRole } from "../../services/fetchGetRole";
import Home from "../../utils/home.png";
import Team from "../../utils/team.png";
import Match from "../../utils/match.png";
import Profile from "../../utils/profile-user.png";
import LogOut from "../../utils/logout.png";
import LogIn from "../../utils/login.png";
import SignUp from "../../utils/signup.png";

export const Navbar = (props) => {

    const [admin, setAdmin] = useState(false);
    const [basic, setBasic] = useState(false);
    let history = useHistory();

    useEffect(async () => {
        if (localStorage.getItem('session')) {


        }
        let role = await getRole();

        if (role.role === "admin") {
            setAdmin(true);
            setBasic(false);
        }

        if (role.role === "basic") {
            setBasic(true);
            setAdmin(false);
        }
    }, [])

    const handlerLogOut = () => {
        localStorage.removeItem('session');
        props.setLoggedApp(false)
        history.push('/')
    }


    return (

        <header className='header' >
            <div className='navbar-header'>
                <nav className='navbar'>

                    {!props.logged &&
                        <Link to='/login'>
                            <div className='icons'>
                                <img src={LogIn}></img>
                                <p>Iniciar Sesion</p>
                            </div>
                        </Link>}
                    {!props.logged &&
                        <Link to='/signup'>
                            <div className='icons'>
                                <img src={SignUp}></img>
                                <p>Registrarse</p>
                            </div>
                        </Link>}

                    {props.logged &&
                        <Link to='/'>
                            <div className='icons'>
                                <img src={Home}></img>
                                <p>Home</p>
                            </div>
                        </Link>}

                    {props.logged &&
                        <Link to='/teams'>
                            <div className='icons'>
                                <img src={Team}></img>
                                <p>Equipos</p>
                            </div>
                        </Link>}

                    {props.logged &&
                        <Link to='/matches'>
                            <div className='icons'>
                                <img src={Match}></img>
                                <p>Partidos</p>
                            </div>
                        </Link>}

                    {props.logged &&
                        <Link to='/user/profile'>
                            <div className='icons'>
                                <img src={Profile}></img>
                                <p>Mi Perfil</p>
                            </div>
                        </Link>}

                    {props.logged &&
                        <div onClick={handlerLogOut} className='icons'>
                            <img src={LogOut}></img>
                            <p>Cerrar Sesion</p>
                        </div>}
                </nav>
            </div>

        </header >
    )
}