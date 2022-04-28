import { Component } from "react";
import Particles from "react-tsparticles";
import bannerLogo from '../../assets/imgs/icons/banner-logo.png';

class HomeBanner extends Component {
    render() {
        const subTitleStyle = {
            maxWidth: "980px"
        };
        const lineStyle = {
            backgroundColor: "#f9e54c",
            width: "90%",
            height: "6px"
        };
        const arrowADownStyle = {
            paddingLeft: "5%"
        };
        const arrowDownStyle = {
            color: "#f9e54c",
            fontWeight: "600",
            fontSize: "64px"
        };
        let arrowDownUrl = "/#home-what-we-do";

        return (
            <section id='home-banner' className="g-0 align-items-center">
                <div className="background-overlay">
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 70,
                                    density: {
                                        enable: true,
                                        value_area: 2000
                                    }
                                },
                                color: {
                                    value: "#ffffff"
                                },
                                shape: {
                                    type: "star",
                                    stroke: {
                                        width: 0,
                                        color: "#000000"
                                    },
                                    polygon: {
                                        nb_sides: 5,
                                    },
                                    image: {
                                        src: "img/github.svg",
                                        width: 100,
                                        height: 100
                                    }
                                },
                                opacity: {
                                    value: 0.5,
                                    random: false,
                                    anim: {
                                        enable: false,
                                        speed: 1,
                                        opacity_min: 0.1,
                                        sync: false
                                    }
                                },
                                size: {
                                    value: 3,
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed: 40,
                                        size_min: 0.1,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: false,
                                    distance: 150,
                                    color: "#ffffff",
                                    opacity: 0.4,
                                    width: 1
                                },
                                move: {
                                    enable: true,
                                    speed: 1,
                                    direction: "none",
                                    random: false,
                                    straight: false,
                                    out_mode: "out",
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200
                                    }
                                }
                            },
                        }}
                    />
                </div>
                <div className="container z-1" style={{ position: 'inherit' }}>
                    <div className="row m-auto g-0">
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="row g-0">
                                <div className="col">
                                    <h1 className="text-white">Thoughts that make sense</h1>
                                </div>
                            </div>
                            <div style={subTitleStyle} className="row align-items-center">
                                <div className="col col-lg-3 col-md-3 col-sm-12 col-12">
                                    <div style={lineStyle} className="m-auto"></div>
                                </div>
                                <div className="col col-lg-9 col-md-9 col-sm-12 col-12">
                                    <h5 className="text-white">We try best, and we make sure we deliver best</h5>
                                </div>
                            </div>
                            <div className="row g-0">
                                <a href={arrowDownUrl} style={arrowADownStyle}>
                                    <i style={arrowDownStyle} className="fa fa-angle-down"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-end">
                            <img src={bannerLogo} alt="" style={{ width: "70%", maxWidth: "320px" }} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeBanner;