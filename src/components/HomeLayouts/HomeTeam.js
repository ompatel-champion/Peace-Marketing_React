import { Component } from "react";
import Slider from "react-slick";

import jacobProfileImg from "../../assets/imgs/persons/JacobD-photo-70-70.jpg";
// import akiraProfileImg from "../../assets/imgs/persons/Akira-photo-70-70.jpg";
import gustavoProfileImg from "../../assets/imgs/persons/Gustavo-photo-70-70.jpeg";
import pascualProfileImg from "../../assets/imgs/persons/PascualG-photo-70-70.jpg";

class HomeTeam extends Component {
    render() {
        const teamMembers = [
            {
                id: 1,
                slug: "jacobd",
                name: "Jacob Peace Davidson",
                photo: jacobProfileImg,
                position: "CEO & Communicator",
                excerpt: "Founder of multiple successful tech companies – focused on solving big industry problems with innovation",
                experiences: "15",
                projects: "∞"
            },
            {
                id: 2,
                slug: "gustavol",
                name: "Gustavo Adolfo L",
                photo: gustavoProfileImg,
                position: "Web Developer",
                excerpt: "Website developer based on Framework: WordPress, Shopify, SquareSpace, Wix, etc.",
                experiences: "7",
                projects: "3"
            },
            {
                id: 3,
                slug: "pascualg",
                name: "Pascual Garcia Congrains",
                photo: pascualProfileImg,
                position: "Web Developer",
                excerpt: "JS framework based Website developer(React, Angular, Node, Express, etc).",
                experiences: "5",
                projects: "100"
            },
        ]

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

        const Team = (props) => {
            return (
                <div className="text-white">
                    <a href={"/teams/" + props.slug} className="team-person-div hover-shadow gray-border">
                        <div className="row">
                            <div className="row align-items-center pb-2">
                                <div className="col col-md-3 col-sm-4 col-4">
                                    <img src={props.photo} style={personImgStyle} alt="IT SEO Jacob Davidson"></img>
                                </div>
                                <div className="col col-md-9 col-sm-8 col-8">
                                    <strong className="text-white">{props.name}</strong>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <h4 className="text-center text-white">{props.position}</h4>
                            </div>
                            <div className="row">
                                <p style={summaryStyle}>Summary</p>
                                <p className="text-white">
                                    {props.excerpt}...
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="w-50">
                                <p style={styleOne}>Experience</p>
                                <p><span style={styleTwo}>{props.experiences}+</span> <span className="text-white">years</span></p>
                            </div>
                            <div className="w-50">
                                <p style={styleOne}>Projects</p>
                                <p><span style={styleTwo}>{props.projects}</span></p>
                            </div>
                        </div>
                    </a>
                </div>
            )
        }

        return (
            <section id="home-team" className="pt-5 pb-5">
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
                            {
                                teamMembers.map((team, i) => {
                                    return (
                                        <Team key={i} {...team} />
                                    );
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeTeam;