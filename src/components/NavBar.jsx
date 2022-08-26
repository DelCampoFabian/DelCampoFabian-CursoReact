import React from "react";
import '../App.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand mx-2 md-mx-5" href="#">Camping</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item sm-mx-2 mx-5">
                            <a className="nav-link" aria-current="page" href="#">Productos</a>
                        </li>
                        <li className="nav-item sm-mx-2 mx-5">
                            <a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                        </li>
                        <li className="nav-item sm-mx-2 mx-5">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item sm-mx-2 mx-5">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;