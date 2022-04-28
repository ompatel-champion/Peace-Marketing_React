import Particles from "react-tsparticles";
import { Row, Col, Image } from "antd";
import HomeWhatWeDo from '../HomeLayouts/HomeWhatWeDo';

import logoTrendingUP from "../../assets/imgs/logos/trending-up.png";
import photoJacobD from "../../assets/imgs/persons/JacobD-photo.jpg";

export default function About() {
    let span = {
        lg: 12,
        md: 12,
        sm: 24
    }

    return (
        <Row style={{ padding: "250px 0 150px 0", backgroundColor: "#000000" }}>
            <Col span={24} className="container">
                <Row>
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
                </Row>
                <Row>
                    <div className="container z-1" style={{ position: 'inherit' }}>
                        <Col>
                            <Row>
                                <Col span={24}>
                                    <h3 className="text-white text-center">About Us</h3>
                                    <div style={{ margin: "auto", maxWidth: "100px" }}>
                                        <Image src={logoTrendingUP} className="text-center" />
                                    </div>
                                    <h6 className="text-white text-center my-3">
                                        We create together, measure always, and revise often, ensuring your customers stay at the focus.
                                    </h6>
                                </Col>
                            </Row>
                            <Row gutter={24} >
                                <Col {...span}>
                                    <Image src={photoJacobD} />
                                </Col>
                                <Col {...span}>
                                    <p className="text-white">
                                        Peace Marketing was founded by Jacob Davidson in 2017 – with a focus on providing small business and startups with strategic advice on marketing in a digital landscape. Jacob saw the gap between the ‘big wig’ agencies and hefty retainers and saw the need for ethical and affordable marketing advice and implementation. After many years of working ‘in-house’ and ‘agency-side’ roles he was able to identify the disconnect between both efforts and implementing campaigns across different channels.
                                    </p>
                                </Col>
                            </Row>
                            <HomeWhatWeDo />
                        </Col>
                    </div>
                </Row>
            </Col>
        </Row>
    );
}

