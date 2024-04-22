import { NavLink } from 'react-router-dom';

import CVpdf from '../../assets/files/CV_Anna_Katsur_Creative_Director.pdf';
import headerStyle from '../Header/Header.module.scss';

const Header = () => {
    const setActiveLink = ({ isActive }) => (isActive ? " active" : "");

    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.container}>
                <a className={headerStyle.download} href={CVpdf} download='CV_Anna_Katsur_Creative_Director.pdf'>Download CV</a>
                <nav>
                    <ul>
                        <li><NavLink to='/' className={`${headerStyle.logo} + ${setActiveLink}`}>Anna Katsur</NavLink></li>
                        <div className={headerStyle.links}>
                            <li><NavLink to='/portfolio' className={setActiveLink}>Portfolio</NavLink></li>
                            <li><NavLink to='/about' setActiveLink className={setActiveLink}>About me</NavLink></li>
                            <li><NavLink to='/contact' setActiveLink className={setActiveLink}>Contact</NavLink></li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
        
    )
};

export default Header;