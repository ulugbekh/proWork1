import Design from '../../../../components/main-section3-design';   //   Design component
import './main.scss'
import LeftText from '../../../../components/left-text';            // chap uchun kotta text component
import RedLink from '../../../../components/red-link'               // qizil dumaloq componenti
import ScroolDown from '../../../../components/text'                // scrool-down componenti

import DesignImg from '../../../../images/background/design.png'    // design ucun rasm
import MarketingImg from '../../../../images/background/marketing.png'      // design ucun rasm

import { useState } from 'react';                                   

const MainSection3 = () => {

    const [condition, setCondition] = useState("design");
    const clickHandler = (state) => {
        setCondition(state)
    }

    return (
        <div className="main-MainSection3 container1">
        <LeftText
            text={'Services'}
        />
            <div className="left-btn">
            
                <button onClick={() => clickHandler('design')} className={`main-section3-btn ${condition == "design" ? "active" : ""}`}>Design</button>
                <button onClick={() => clickHandler('technology')} className={`main-section3-btn ${condition == "technology" ? "active" : ""}`}>Technology</button>
                <button onClick={() => clickHandler('marketing')} className={`main-section3-btn ${condition == "marketing" ? "active" : ""}`}>marketing</button>
                <button onClick={() => clickHandler('research')} className={`main-section3-btn ${condition == "research" ? "active" : ""}`}>reseach</button>
                <div className="red-links">
                    <RedLink
                        redText={'Start project'}
                    />
                </div>
            </div>
            <div className="right-btn">
            <div className="img-blocks">
                <img src={DesignImg} alt="" className={`img-design img1  ${condition == "design" ? "active" : ""}`} />
                <img src={MarketingImg} alt="" className={`img-design img2 ${condition == "technology" ? "active" : ""}`} />
                <img src={DesignImg} alt="" className={`img-design img3 ${condition == "Marketing" ? "active" : ""}`} />
                <img src={MarketingImg} alt="" className={`img-design img4 ${condition == "research" ? "active" : ""}`} />
            </div>
                {condition === "design" ? (
                    <Design
                        text={'Design'}
                        miniText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse '}
                    />
                ) : condition === "technology" ? (
                    <Design
                        text={'Technology'}
                        miniText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .'}
                    />
                ) : condition === "marketing" ? (
                    <Design
                        text={'Marketing'}
                        miniText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse  '}
                    />
                ) : condition === "research" ? (
                    <Design
                        text={'Research'}
                        miniText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse '}
                    />
                ) : (
                    <></>
                )}
                <div className="main-section3-scrool-down">
                    <ScroolDown
                        scroolText={'Scrool Down'}
                    />
                    <div className="mobil-red-link">
                        <RedLink
                            redText={'Start project'}
                        />
                    </div>
                    </div>
            </div>
                    
        </div>
    );
}

export default MainSection3;