import './main.scss'
import Burger from '../../../images/icon/burger.svg'
import HedaerMobileLogo from '../../../images/icon/header-mobi-logo.svg'
import headerMobiRight from '../../../images/icon/play-red.svg'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const HeaderMobile = () => {

    const [headerModal, setHeaderModal] = useState('')
    const [linkClick, setLinkClick] = useState('')

    // onClick={() => setHeaderModal('clicked')}
    // onClick={() => setHeaderModal(!headerModal)} className={`shadov-block ${headerModal ? "active" : " "}`}
    return (
        <div className="header-mobile">
        
            <div onClick={() => setHeaderModal('clicked')}
                    onClick={() => setHeaderModal(!headerModal)} className={`header-shov ${headerModal ? "active" : " "}`}></div>
            <div className={`header-modal ${headerModal == 'clicked' ? 'active' : ''}`}>
                <div className="header-modal-inner">
                    <Link to="/about" className="header-link-item">About</Link>
                    <Link to="/Works" className="header-link-item">Works</Link>
                    <Link to="/Prices" className="header-link-item">Prices</Link>
                    <Link to="/ForClients" className="header-link-item">For clients</Link>
                    <Link to="/Contacts" className="header-link-item">Contacts</Link>
                </div>
            </div>
            <div className="header-top container">
                <div onClick={() => setHeaderModal('clicked')} className="header-mobile-left">
                    <img src={Burger} alt="" className="burger" />
                </div>
                <div className="header-mobile-middle">
                    <Link to="/"> <img src={HedaerMobileLogo} alt="" className="header-mobile-logo" /> </Link>
                </div>
                <div className="header-mobile-right">
                    <Link > <img src={headerMobiRight} alt="" className="header-mobi-right" /></Link>
                </div>

            </div>

        </div>
    );
}

export default HeaderMobile;