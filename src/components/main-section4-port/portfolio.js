import './main.scss'
import port1 from '../../images/background/port1.png'
import port2 from '../../images/background/port2.png'
import port3 from '../../images/background/port3.png'
import port4 from '../../images/background/port4.png'

const Portfolio = () => {
    return ( 
                <div className="main-section4 container">
                    <div className="main-section4-inner">
                        <div className="partfolio">
                            <a className="portfolio-link" href=""><img src={port1} alt="" className="portfolio-img" /></a>
                            <p className="portfolio-text">OUT ZONE</p>
                        </div>
                        <div className="partfolio">
                            <a className="portfolio-link" href=""><img src={port2} alt="" className="portfolio-img" /></a>
                            <p className="portfolio-text">OUT ZONE</p>
                        </div>
                        <div className="partfolio">
                            <a className="portfolio-link" href=""><img src={port3} alt="" className="portfolio-img" /></a>
                            <p className="portfolio-text">OUT ZONE</p>
                        </div>
                        <div className="partfolio">
                            <a className="portfolio-link" href=""><img src={port4} alt="" className="portfolio-img" /></a>
                            <p className="portfolio-text">OUT ZONE</p>
                        </div>
                        <div className="partfolio">
                            <a className="portfolio-link" href=""><img src={port1} alt="" className="portfolio-img" /></a>
                            <p className="portfolio-text">OUT ZONE</p>
                        </div>
                        <div className="partfolio">
                            <a className="portfolio-link" href=""><img src={port2} alt="" className="portfolio-img" /></a>
                            <p className="portfolio-text">OUT ZONE</p>
                        </div>
                    </div>
                </div>
     );
}
 
export default Portfolio;