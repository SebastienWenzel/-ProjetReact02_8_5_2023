import { useState } from 'react';
import { Link } from 'react-router-dom';
import logocar from '../assets/images/logocar.png';

const _header = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
      setNav(!nav);
    };
    return (
        <>
            <nav>
                {/* desktop */}

                <div className="navbar">
                    <div className="navbar__img">
                        <Link to='/home'>
                            <img src={logocar} alt="logo"/>
                        </Link>
                    </div>
                    <ul className="navbar__links"
                    
                    >
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/models'>Vehicle Models</Link>
                        </li>
                        <li>
                            <Link to='/testimonials'>Testimonials</Link>
                        </li>
                        <li>
                            <Link to='/team'>Our Team</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>      
                    </ul>
                    <div className="navbar__buttons">
                        <Link className="navbar__buttons__sign-in" to="/">Sign in</Link>
                        <Link className="navbar__buttons__register" to="/">Register</Link>
                    </div>
                    {/* mobile hamburger*/}
                    <div className="mobile-hamb" onClick={openNav}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default _header;