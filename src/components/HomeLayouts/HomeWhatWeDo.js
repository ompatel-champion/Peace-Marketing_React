import { Component } from "react";
import strategyIco from "../../assets/imgs/icons/strategy_icon.png";
import digitalMarketingIco from "../../assets/imgs/icons/digital_marketing_icon.png";
import websiteDesignIco from "../../assets/imgs/icons/web_development_icon.png";

class HomeWhatWeDo extends Component {
    render() {
        const icoStyle = {
            width: "120px",
            height: "120px",
            margin: "auto"
        };
        let strategyUrl = "/";
        let digitalMarketingUrl = "/";
        let websiteDesignUrl = "/";

        return (
            <section id="home-what-we-do" className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <h2 className="text-white">What we do...</h2>
                    </div>

                    <div className="row pt-1 pb-1 align">
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 g-5">
                            <div className="what-we-do-div gray-border">
                                <img src={strategyIco} style={icoStyle} alt="Peace Marketing Strategy"></img>
                                <h5 className="text-white pt-4 pb-2">Custom Software</h5>
                                <p className="text-white">Everything from desktop applications for Windows/Mac/Linux to embedded software for hardware devices.</p>
                                <a href={strategyUrl} className="ps-btn">Learn More</a>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 g-5">
                            <div className="what-we-do-div gray-border">
                                <img src={digitalMarketingIco} style={icoStyle} alt="Peace Marketing Digital Marketing"></img>
                                <h5 className="text-white pt-4 pb-2">Mobile Apps</h5>
                                <p className="text-white">Native iOS and Android or cross-platform solutions that can be deployed to the App Store & Play Store, with a single code base!</p>
                                <a href={digitalMarketingUrl} className="ps-btn">Learn More</a>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 g-5">
                            <div className="what-we-do-div gray-border">
                                <img src={websiteDesignIco} style={icoStyle} alt="Peace Marketing Website Design"></img>
                                <h5 className="text-white pt-4 pb-2">Web Applications</h5>
                                <p className="text-white">From basic websites to complex business software that works in the web browser and can respond to any screen size.</p>
                                <a href={websiteDesignUrl} className="ps-btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeWhatWeDo;