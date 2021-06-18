import './main.scss'
import RedLink from '../../../components/red-link'; // qizil dumaloq component

const MainItem = () => {
    return ( 
        <div className="section1-main container">
            <ul>
                <li className="text1">Lead is a digital innovation studio that leverages best-in-class strategy, design and development</li>
            </ul>
            <h1 className="section1-main-BigText">
            We  rethink 
             <span className="big-text-span">the web</span>
            </h1>
            <div className="consultation">
                <RedLink className="main-red-link"
                    redText={'Consultation'}
                 />
            </div>
        </div>
     );
}
 
export default MainItem;