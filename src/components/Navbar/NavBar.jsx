import React from "react";
import './Navbar.css';
import logo from "../../assets/img/camping.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand mx-2 md-mx-5" href="#">
                    <img src={logo} alt="a"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i className="navbar-toggler-icon"></i></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item sm-mx-2 mx-5">
                            <a aria-current="page" href="#">Productos</a>
                        </li>
                        <li className="nav-item sm-mx-2 mx-5">
                            <a href="#"><CartWidget/></a>
                        </li>
                        <li className="nav-item sm-mx-2 mx-5">
                            <a href="#">Nosotros</a>
                        </li>
                        <li className="nav-item sm-mx-2 mx-5">
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;