import { NavLink } from 'react-router-dom';
import { IoIosStarOutline, IoIosGitCompare } from 'react-icons/io';
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
                                <IoIosStarOutline
                                    size={40}
                                    color={isActive ? '#6750A4' : '#1F1F1F'}
                                />
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/compare" className="nav-link">
                            {({ isActive }) => (
                                <IoIosGitCompare
                                    size={40}
                                    color={isActive ? '#6750A4' : '#1F1F1F'}
                                />
                            )}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
