import './main.scss'
import Be from '../../images/icon/be.svg'
import Face from '../../images/icon/facebook.svg'
import Ins from '../../images/icon/instag.svg'

import { Link } from 'react-router-dom';
const FollowMe = () => {
    return ( 
        <>
            <div className="follow ">
                <p className="follow-text">
                Follow us
                </p>
                <div className="follow-icon">
                    <a target='_blank'  href="" className="follow-link"><img src={Be} alt="" className="follow-icons" /></a>
                    <a  target='_blank' href="" className="follow-link"><img src={Face} alt="" className="follow-icons" /></a>
                    <a target='_blank'  href="" className="follow-link instagram"><img src={Ins} alt="" className="follow-icons instag" /></a>
                </div>
            </div>
        </>
     );
}
 
export default FollowMe;