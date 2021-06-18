import './main.scss'
import Header from '../containers/header'
import AboutSection1 from '../containers/comp/about';  // About uchun section1
import MainSection5 from '../containers/comp/main/main-section5' //asosiy page sectionlari
import AboutSection2 from '../containers/comp/about/about-section2';
import MobiHeader from '../containers/mobile/header-mobile'

const About = () => {
  return (
    <>
      <div id="fullpage" className="about-block">
        <div className="custom">
          {/* <Header /> */}
          {/* <MobiHeader/> */}
          <AboutSection1/>
        </div>
        <div className="custom">
          <div className="about-section2">
          <AboutSection2/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;