// asosiy page

import './main.scss'
import MainItem from '../containers/comp/main' //asosiy page sectionlari 
import MainSection1 from '../containers/comp/main/main-section1' //asosiy page sectionlari 
import MainSection2 from '../containers/comp/main/main-section1/mainsection2' //asosiy page sectionlari
import MainSection3 from '../containers/comp/main/main-section3' //asosiy page sectionlari
import MainSection4 from '../containers/comp/main/main-section4' //asosiy page sectionlari
import MainSection5 from '../containers/comp/main/main-section5' //asosiy page sectionlari
import Header from '../containers/header' //Header



import HeaderMobile   from '../containers/mobile/header-mobile'  // mobile Header
import MainSection1Mobi from '../containers/comp/main/main.section1-mobi'

const Main = () => {
    return (
      <>
        <div id="fullpage" className="main-block">
        <div className="custom"> 
         {/* <Header/> */}
         {/* <HeaderMobile/> */}
          <MainItem />    
        </div>
        <div className="custom">
        <MainSection1Mobi/>
          <MainSection1 />
        </div>
        <div className="custom">
          <MainSection2 />
        </div>
        <div className="custom">
          <MainSection3 />
        </div>
        <div className="custom">
          <MainSection4 />
        </div>
        <div className="custom">
         <MainSection5/>
        </div>
        
      </div>
      </>
    );
}
 
export default Main;