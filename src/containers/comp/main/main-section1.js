import RedLink from "../../../components/red-link";   //qizil dumaloq component
import FollowMe from "../../../components/follow/follow";  // Be facebook instagram componenti
import ScroolDown from "../../../components/text";  //scrool-down component ong taraf pasda boladi
const MainSection1 = () => {
    return (
        <>
            <div className="main-section1 container">
                <h2 className="main-section1-text">
                    Information about
                </h2>
                <div className="main-section1-block">
                    <div className="main-section1-top">
                        <p className="main-section1-block-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                        </p>
                        <RedLink
                            redText={'Start project'} //props
                        />
                    </div>
                    <div className="main-section1-bottom">
                             <FollowMe />
                            <ScroolDown
                                scroolText={'scroll down'} // props
                            />
                    </div>
                </div>


            </div>
        </>
    );
}

export default MainSection1;