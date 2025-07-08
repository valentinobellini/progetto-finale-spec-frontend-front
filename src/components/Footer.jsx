import { NavLink } from 'react-router-dom';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';

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
                    <NavLink to='/manifesto' reloadDocument className="footer-link">
                        MANIFESTO
                    </NavLink>
                </nav>


                <div className="social-icons">
                    <IoLogoInstagram size={32} />
                    <IoLogoFacebook size={32} />
                    <IoLogoTwitter size={32} />
                </div>


            </div>


        </div>
    );
}







