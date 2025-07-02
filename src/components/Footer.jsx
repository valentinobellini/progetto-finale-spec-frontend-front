import { NavLink } from 'react-router-dom';


export default function Footer() {
    return (
        <div className="footer">
            <div className='footer_wrapper'>

                <nav className="footer-nav">
                    <NavLink to="/" reloadDocument className="footer-link">
                        HOME
                    </NavLink>
                    <NavLink to="/about" className="footer-link">
                        ABOUT
                    </NavLink>
                    <NavLink to='/howto' className="footer-link">
                        HOW TO USE
                    </NavLink>
                    <NavLink to="/sources" className="footer-link">
                        SOURCES
                    </NavLink>
                    <NavLink to='/credits' className="footer-link">
                        CREDITS
                    </NavLink>
                </nav>

            </div>
        </div>
    );
}







