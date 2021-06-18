import './main.scss'

import { Link } from 'react-router-dom';

const RedLink = ({redText, to}) => {
    return ( 
        <>
            <div className="red-link">
                <Link className="red-links">{redText}</Link>
                <div className="arrow">
                    <span className="arrow-item spane1"></span>
                    <span className="arrow-item spane2"></span>
                    <span className="arrow-item spane3"></span>
                </div>
            </div>
        </>
     );
}
 
export default RedLink;