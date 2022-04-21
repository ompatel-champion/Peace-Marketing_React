import { Component } from "react";

import brianKerleLogo from "../../assets/imgs/logos/brian_kerle_logo_104-104.png";
import annaKaszyckiLogo from "../../assets/imgs/logos/anna_Kaszycki_logo_104-104.png";
import robMccayLogo from "../../assets/imgs/logos/rob_mccay_logo_104-104.png";

class HomePeopleTalk extends Component {
    render() {
        const testimonialLogoStyle = {
            width: "104px"
        }
        const quoteStyle = {
            fontSize: "62px"
        }
        const smallP = {
            fontSize: "14px",
            marginBottom: "0px"
        }
        return (
            <section id="home-people-talk" className="pb-5 pt-5">
                <div className="container">
                    <div className="row">
                        <h2 className="text-white">PEOPLE TALK</h2>
                        <p className="text-white">
                            Hold on, chillax! We’re not trying to sell you on our product. Instead, here are some clients that will do the hard work for us.
                        </p>
                    </div>

                    <div className="row pt-1 pb-1 align">
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="testimonial-div text-center text-white bg-secondary">
                                <p style={quoteStyle}><i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                <p>
                                    Peace Marketing was able to optimise my efforts across social and search - which lowered our Cost per Acquisition. We have seen a considerable increase in participation across all of our services.
                                </p>
                                <img src={brianKerleLogo} style={testimonialLogoStyle} alt="Peace Marketing Brian Kerele website development" />
                                <h4>BRIAN KERLE</h4>
                                <p style={smallP}>
                                    Founder Brian Kerle Basketball Olympian
                                </p>
                                <p style={smallP}>
                                    Hall Of Fame NBL Coach
                                </p>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="testimonial-div text-center text-white bg-secondary">
                                <p style={quoteStyle}><i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                <p>
                                    Peace Marketing helped me launch my business from 0 to 100. After forming an in-depth and insightful strategy for me to work off to then helping me launch my website they have gone above and beyond. Whilst it is still early days - we will be calling upon Peace Marketing to assist in other areas as we grow.
                                </p>
                                <img src={annaKaszyckiLogo} style={testimonialLogoStyle} alt="Peace Marketing Brian Kerele website development" />
                                <h4>ANNA KASZYCKI</h4>
                                <p style={smallP}>
                                    Founder Aspire Beyond Greatness
                                </p>
                                <p style={smallP}>
                                    World Champion Rower
                                </p>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="testimonial-div text-center text-white bg-secondary">
                                <p style={quoteStyle}><i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                <p>
                                    After getting some poor results utilising Facebook Ads - we approached Peace Marketing to help with optimising our ads. Since, we have had a 60% drop in cost per acquisition and have been able to invest back into our business.
                                </p>
                                <img src={robMccayLogo} style={testimonialLogoStyle} alt="Peace Marketing Brian Kerele website development" />
                                <h4>ROB MCCAY</h4>
                                <p style={smallP}>
                                    Founder ROK Bracelets
                                </p>
                                <p style={smallP}>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomePeopleTalk;