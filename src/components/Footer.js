import { Component } from "react";
import siteLogo from '../assets/imgs/Logo-White.png';

class Footer extends Component {
    render() {
        const navStyle = {
            display: "flex",
            listStyle: "none",
            justfiyContent: "justify-start",
            marginBottom: "0px"
        }
        const footerLogoStyle = {
            maxWidth: "64px",
            float: "right"
        }
        const footerSeperatorStyle = {
            color: "white"
        }
        let facebookUrl = "https://www.facebook.com/peace.marketingau/";
        let twitterUrl = "https://twitter.com/peacemarketing";
        let instagramUrl = "https://www.instagram.com/peacemarketing/";
        let linkedinUrl = "https://www.linkedin.com/peacemarketing?_l=en_US";

        return (
            <footer id="footer" className="bg-black pt-5 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-sm-6 col-6 px-0">
                            <ul style={navStyle} className="px-0">
                                <li>
                                    <a href="https://peace-marketing.com" aria-current="page" className="text-white active">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="https://peace-marketing.com/how-we-help/" className="text-white">
                                        How we help
                                    </a>
                                </li>
                                <li>
                                    <a href="https://peace-marketing.com/our-story/" className="text-white">
                                        Our Story
                                    </a>
                                </li>
                                <li>
                                    <a href="https://peace-marketing.com/blog/" className="text-white">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="https://peace-marketing.com/contact-us/" className="text-white">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 col-6">
                            <img src={siteLogo} style={footerLogoStyle} alt="Peace Marketing Website Development Team" />
                        </div>
                    </div>
                    <div className="row pt-3 pb-3">
                        <hr style={footerSeperatorStyle} />
                    </div>
                    <div className="row ">
                        <div className="col-md-8">
                            <p id="footer-bottom-txt" className="text-white small">
                                © 2019 All rights Reserved. Design by Peace Marketing
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="row social-icons">
                                <a href={facebookUrl} target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href={twitterUrl} target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href={instagramUrl} target="_blank" rel="noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;