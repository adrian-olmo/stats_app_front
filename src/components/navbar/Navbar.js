import React, { Component, useEffect, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (

        <header className='header' >
            <div className='navbar-header'>
                <nav className='navbar'>
                    <button className="button header-button">Registrarse</button>
                    <button className="button header-button">Iniciar sesión</button>
                    <button className="button header-button">Cerrar sesión</button>
                </nav>
            </div>

        </header >
    )
}