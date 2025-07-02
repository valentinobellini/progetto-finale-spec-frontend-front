import { NavLink } from 'react-router-dom';

import heartEmpty from '../assets/heart-empty.png';
import heartFilled from '../assets/heart-filled.png';
import scaleEmpty from '../assets/scale-empty.png';
import scaleFilled from '../assets/scale-filled.png';
import logo from '../assets/logo2.png';

export default function Header() {
    return (
        <header className="header">
            <NavLink to="/" reloadDocument className="home-link">
                <img className='logo' src={logo} alt="" />
            </NavLink>

            {/* Icon links on the right */}
            <nav className="header-nav">
                <ul>
                    <li>
                        <NavLink to="/favorites" className="nav-link">
                            {({ isActive }) => (
                                <>
                                    <img
                                        src={isActive ? heartFilled : heartEmpty}
                                        alt=""
                                        className="nav-icon"
                                    />
                                    {/* <span>Preferiti</span> */}
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/compare" className="nav-link">
                            {({ isActive }) => (
                                <>
                                    <img
                                        src={isActive ? scaleFilled : scaleEmpty}
                                        alt=""
                                        className="nav-icon"
                                    />
                                    {/* <span>Confronta</span> */}
                                </>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
