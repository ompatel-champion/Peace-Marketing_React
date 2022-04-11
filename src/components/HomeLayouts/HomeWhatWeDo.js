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
        const learnMoreStyle = {
            backgroundColor: "#f9e54c",
            color: "black",
            padding: "8px 22px"
        }
        let strategyUrl = "/";
        let digitalMarketingUrl = "/";
        let websiteDesignUrl = "/";

        return (
            <section id="home-what-we-do" className="pt-5 pb-5 bg-dark">
                <div className="container">
                    <div className="row">
                        <h2 className="text-white">What we do...</h2>
                    </div>

                    <div className="row pt-1 pb-1 align">
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 g-5">
                            <div className="what-we-do-div">
                                <img src={strategyIco} style={icoStyle} alt="Peace Marketing Strategy"></img>
                                <h5 className="text-white pt-4 pb-2">Strategy</h5>
                                <p className="text-white">Your strategy is the staple to succeeding online in a digital world. Ensuring each component within your marketing stack is complimenting the other is imperative to maximising resources.</p>
                                <a href={strategyUrl} style={learnMoreStyle}>Learn More</a>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 g-5">
                            <div className="what-we-do-div">
                                <img src={digitalMarketingIco} style={icoStyle} alt="Peace Marketing Digital Marketing"></img>
                                <h5 className="text-white pt-4 pb-2">Digital Marketing</h5>
                                <p className="text-white">Knowing the right platforms to reach your target market is key to weighting where you should apply the most efforts. Across Search, Social, Email, Digital PR and more. Peace Marketing can assist in finding where your ideal customers are and where to focus your efforts.</p>
                                <a href={digitalMarketingUrl} style={learnMoreStyle}>Learn More</a>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 g-5">
                            <div className="what-we-do-div">
                                <img src={websiteDesignIco} style={icoStyle} alt="Peace Marketing Website Design"></img>
                                <h5 className="text-white pt-4 pb-2">Website Design</h5>
                                <p className="text-white">We design and develop engaging and purpose driven websites. Keeping your customers attention has grown harder then ever before. Your website needs to keep their attention and get them to take action on your site. In a mobile world - we have mobile centric designs using WordPress as a platform.</p>
                                <a href={websiteDesignUrl} style={learnMoreStyle}>Learn More</a>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 g-5">
                            <div className="what-we-do-div">
                                <img src={strategyIco} style={icoStyle} alt="Peace Marketing Strategy"></img>
                                <h5 className="text-white pt-4 pb-2">Mobile App Development</h5>
                                <p className="text-white">Your strategy is the staple to succeeding online in a digital world. Ensuring each component within your marketing stack is complimenting the other is imperative to maximising resources.</p>
                                <a href={strategyUrl} style={learnMoreStyle}>Learn More</a>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 g-5">
                            <div className="what-we-do-div">
                                <img src={digitalMarketingIco} style={icoStyle} alt="Peace Marketing Digital Marketing"></img>
                                <h5 className="text-white pt-4 pb-2">Custom Software</h5>
                                <p className="text-white">Knowing the right platforms to reach your target market is key to weighting where you should apply the most efforts. Across Search, Social, Email, Digital PR and more. Peace Marketing can assist in finding where your ideal customers are and where to focus your efforts.</p>
                                <a href={digitalMarketingUrl} style={learnMoreStyle}>Learn More</a>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 g-5">
                            <div className="what-we-do-div">
                                <img src={websiteDesignIco} style={icoStyle} alt="Peace Marketing Website Design"></img>
                                <h5 className="text-white pt-4 pb-2">IoT Development</h5>
                                <p className="text-white">We design and develop engaging and purpose driven websites. Keeping your customers attention has grown harder then ever before. Your website needs to keep their attention and get them to take action on your site. In a mobile world - we have mobile centric designs using WordPress as a platform.</p>
                                <a href={websiteDesignUrl} style={learnMoreStyle}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeWhatWeDo;