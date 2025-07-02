import { NavLink } from 'react-router-dom';


export default function Footer() {
    return (
        <div className="footer">
            <div className='footer_wrapper'>

                <nav className="footer-nav">
                    <NavLink to="/" reloadDocument className="footer-link">
                        HOME
                    </NavLink>
                    <NavLink to="/about" reloadDocument className="footer-link">
                        ABOUT
                    </NavLink>
                    <NavLink to='/howto' reloadDocument className="footer-link">
                        HOW TO USE
                    </NavLink>
                    <NavLink to="/sources" reloadDocument className="footer-link">
                        SOURCES
                    </NavLink>
                    <NavLink to='/credits' reloadDocument className="footer-link">
                        CREDITS
                    </NavLink>
                </nav>

            </div>
        </div>
    );
}







