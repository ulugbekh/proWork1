import './main.scss'
import Logo from '../../images/icon/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Header = () => {

    let DarkMode = document.body

    const [headerLink, setHeaderLink ] = useState('')
    return ( 
        <div className="header-block">
            <div className="header container">
            <Link to="/" onClick={() => setHeaderLink('/')} className={`link-item ${headerLink == '/' ? 'active' : ''}`}><img src={Logo} alt="logotip" className="header-logotip" /></Link>
           <div className="header-right">
           <select name="" id="" className="select">
                <option value="" className="option">UZ</option>
                <option value="" className="option">EN</option>
                <option value="" className="option">РУ</option>
            </select>
            <div className="dark-mode">
                <button className="dark-modes">dark</button>
            </div>
                <Link to="/about" onClick={() => setHeaderLink('about')} className={`link-item ${headerLink == 'about' ? 'active' : ''}`}>About</Link>
                <Link to="/Works" onClick={() => setHeaderLink('Works')} className={`link-item ${headerLink == 'Works' ? 'active' : ''}`}>Works</Link>
                <Link to="/Prices" onClick={() => setHeaderLink('Prices')} className={`link-item ${headerLink == 'Prices' ? 'active' : ''}`}>Prices</Link>
                <Link to="/ForClients" onClick={() => setHeaderLink('ForClients')} className={`link-item ${headerLink == 'ForClients' ? 'active' : ''}`}>For clients</Link>
                <Link to="/Contacts" onClick={() => setHeaderLink('Contacts')} className={`link-item ${headerLink == 'Contacts' ? 'active' : ''}`}>Contacts</Link>
            <div className="header-number">
                <a href="tel:+1 (647)-563-9114" className="numbers">+1 (647)-563-9114</a>
            </div>
            <div className="started">
            <Link className="started-item" to="/Start a project">Start a project</Link>
            </div>
           </div>
        </div>
        </div>
     );
}
 
export default Header;