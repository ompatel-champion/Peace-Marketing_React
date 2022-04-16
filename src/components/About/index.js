import { Component } from "react";
import Slider from "react-slick";

import jacobProfileImg from "../../assets/imgs/persons/JacobD-photo-70-70.jpg";
import akiraProfileImg from "../../assets/imgs/persons/Akira-photo-70-70.jpg";
import gustavoProfileImg from "../../assets/imgs/persons/Gustavo-photo-70-70.jpeg";
import pascualProfileImg from "../../assets/imgs/persons/PascualG-photo-70-70.jpg";

class About extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const personImgStyle = {
            width: "70px",
            borderRadius: "50%"
        }
        const summaryStyle = {
            color: "#5E6069",
            textTransform: "uppercase",
            fontSize: "16px",
            lineHeight: "1.4",
            marginBottom: "8px"
        };
        const styleOne = {
            color: "#5E6069",
            textTransform: "uppercase",
            fontSize: "18px",
            lineHeight: "1.4",
            marginBottom: "2px"
        };
        const styleTwo = {
            color: "#f9e54c",
            textTransform: "uppercase",
            fontSize: "36px"
        }

        return (
            <section id="home-team" className="pt-5 pb-5 bg-dark">
                <div className="container">
                    <div className="row">
                        <h2 className="text-white">
                            Our Team
                        </h2>
                        <p className="text-white">
                            We interview dozens of candidates before each hire and promote long-term workings relationships. Every member of our team is ready to deliver immediate value to your project.
                        </p>
                    </div>

                    <div className="row pt-1 pb-1 mw-90 align">
                        <Slider {...settings}>
                            <div className="text-white">
                                <div className="team-person-div hover-shadow">
                                    <div className="row align-items-center pb-2">
                                        <div className="col col-md-3 col-sm-4 col-4">
                                            <img src={jacobProfileImg} style={personImgStyle} alt="IT SEO Jacob Davidson"></img>
                                        </div>
                                        <div className="col col-md-9 col-sm-8 col-8">
                                            <strong>Jacob Davidson</strong>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <h4 className="text-center">CEO & Communicator</h4>
                                    </div>
                                    <div className="row">
                                        <p style={summaryStyle}>Summary</p>
                                        <p>
                                            Through Jacob's work with startups at TechFarms and TechFarms Capital, he saw the critical...
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="w-50">
                                            <p style={styleOne}>Experience</p>
                                            <p><span style={styleTwo}>15+</span> years</p>
                                        </div>
                                        <div className="w-50">
                                            <p style={styleOne}>Projects</p>
                                            <p><span style={styleTwo}>∞</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white">
                                <div className="team-person-div hover-shadow">
                                    <div className="row align-items-center pb-2">
                                        <div className="col col-md-3 col-sm-4 col-4">
                                            <img src={gustavoProfileImg} style={personImgStyle} alt="Website Programmer Akira Sato"></img>
                                        </div>
                                        <div className="col col-md-9 col-sm-8 col-8">
                                            <strong>Gustavo Adolfo L</strong>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <h4 className="text-center">Fulltime Developer</h4>
                                    </div>
                                    <div className="row">
                                        <p style={summaryStyle}>Summary</p>
                                        <p>
                                            Through Jacob's work with startups at TechFarms and TechFarms Capital, he saw the critical...
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="w-50">
                                            <p style={styleOne}>Experience</p>
                                            <p><span style={styleTwo}>15+</span> years</p>
                                        </div>
                                        <div className="w-50">
                                            <p style={styleOne}>Projects</p>
                                            <p><span style={styleTwo}>∞</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white">
                                <div className="team-person-div hover-shadow">
                                    <div className="row align-items-center pb-2">
                                        <div className="col col-md-3 col-sm-4 col-4">
                                            <img src={pascualProfileImg} style={personImgStyle} alt="Website Developer Pascual Garcia Congrains"></img>
                                        </div>
                                        <div className="col col-md-9 col-sm-8 col-8">
                                            <strong>Pascual Garcia Congrains</strong>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <h4 className="text-center">Web Developer</h4>
                                    </div>
                                    <div className="row">
                                        <p style={summaryStyle}>Summary</p>
                                        <p>
                                            Through Jacob's work with startups at TechFarms and TechFarms Capital, he saw the critical...
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="w-50">
                                            <p style={styleOne}>Experience</p>
                                            <p><span style={styleTwo}>15+</span> years</p>
                                        </div>
                                        <div className="w-50">
                                            <p style={styleOne}>Projects</p>
                                            <p><span style={styleTwo}>∞</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;