import './main.scss'

const BoxLink = ({boxLink, text, miniText, href}) => {
    return ( 
        <a href={href} target="_blank" className={boxLink}>
            <h6 className="box-link-text">{text}</h6>
            <p className="box-link-miniText">{miniText}</p>

        </a>
     );
}
 
export default BoxLink;