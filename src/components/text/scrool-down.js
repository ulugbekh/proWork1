import './main.scss'

const ScroolDown = ({scroolText}) => {
    return ( 
        <div className="scrooldown-block">
            <div className="scrool-arrow"></div>
            <p className="scrool-text">{scroolText}</p>
        </div>
     );
}
 
export default ScroolDown;