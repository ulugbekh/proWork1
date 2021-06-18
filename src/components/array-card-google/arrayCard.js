import './main.scss'
const ArrayCard = ({data, text, img}) => {
    return ( 
        <div className="array-card">
            <div className="card-top">
                <img src={img} alt="" className="card-icon" />
                <p className="card-date">{data}</p>
            </div>
            <p className="card-text">{text}</p>
        </div>
     );
}
 
export default ArrayCard;