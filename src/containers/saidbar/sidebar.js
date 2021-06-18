import './main.scss'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return ( 
        <div className="sidebar">
            <div className="side-bar">
            <Link to="/" className="sidebar-links"></Link>
            <Link to="/about" className="sidebar-links"></Link>
            <Link to="/works" className="sidebar-links"></Link>
            <Link to="/prices" className="sidebar-links"></Link>
            <Link to="/fro clients" className="sidebar-links"></Link>
            <Link to="/contacts" className="sidebar-links"></Link>
            </div>
        </div>
     );
}
 
export default SideBar;