import './main.scss'

const Design = ({img, text, miniText}) => {
    return ( 
        <div className="design-block">
                <h3 className="design-text">{text}</h3>
            <p className="design-mini-text">{miniText}</p>
        </div>
     );
}
 
export default Design;