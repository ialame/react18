import React from "react";
import {Link} from 'react-router-dom'

let NavBar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">

                <Link to={'/'} className="navbar-brand">
                    <i className="fa fa-mobile text-warning"/> PCA <span className="text-warning">Manager</span>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/card/encours'} className="nav-link">
                                En Cours
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/ebaycard/all'} className="nav-link">
                                Cartes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/serie/list'} className="nav-link">
                                Series
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/calendar'} className="nav-link">
                                Gide de prix
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </React.Fragment>
    )
}
export default NavBar;