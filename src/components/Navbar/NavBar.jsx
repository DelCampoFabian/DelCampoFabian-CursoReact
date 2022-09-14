import React from "react";
import './Navbar.css';
import logo from "../../assets/img/camping.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand mx-2 md-mx-5" to="/">
                    <img src={logo} alt="Camping"/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i className="navbar-toggler-icon text-muted"></i></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item sm-mx-2 mx-5">
                            <NavLink aria-current="page" to="/productos" className="nav__enlaces">Productos</NavLink>
                        </li>
                        <li className="nav-item sm-mx-2 mx-5">
                            <NavLink to="/" className="nav__enlaces"><CartWidget/></NavLink>
                        </li>
                        <li className="nav-item sm-mx-2 mx-5">
                            <NavLink  to="/categoria/Conservadoras" className="nav__enlaces">Conservadoras</NavLink>
                        </li>
                        <li className="nav-item sm-mx-2 mx-5">
                            <NavLink  to="/categoria/Termos" className="nav__enlaces">Termos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;