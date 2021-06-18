import './main.scss'
import RedLink from '../../../components/red-link'
import LeftText from '../../../components/left-text'
import ScroolDown from '../../../components/text'

const AboutSection1 = () => {
    return ( 
        <div className="about-section1 container1">
            <h2 className="about-section1-text">
            Want a unique design? We will help you!
            </h2>
            
            <div className="about-section1-block">
                <p className="about-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                <p className="about-left about-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                <RedLink
                    redText={'Start project'}
                />
            </div>
            <div className="left-text">
            <LeftText
                text={'information about'}
            />
            </div>
            <div className="about-section1-block">
                
            </div>
                <ScroolDown
                    scroolText={'scroll down'}
                />
        </div>
     );
}
 
export default AboutSection1;