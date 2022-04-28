import Particles from "react-tsparticles";
import { Row, Col, Image, Collapse, Space, Carousel } from "antd";
import profilePhoto from "../../assets/imgs/persons/Gustavo-photo.jpeg";
import imgOne from '../../assets/imgs/home/1.webp';
import imgTwo from '../../assets/imgs/home/2.webp';
import imgThree from '../../assets/imgs/home/3.webp';
import imgFour from '../../assets/imgs/home/4.webp';
import imgFive from '../../assets/imgs/home/5.webp';
import imgSix from '../../assets/imgs/home/6.webp';

const { Panel } = Collapse;
export default function GustavoL() {
    let spanL = {
        lg: 6,
        md: 6,
        sm: 24
    }
    let spanR = {
        lg: 18,
        md: 18,
        sm: 24
    }
    let spanM = {
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
    }

    return (
        <Row style={{ padding: "250px 0 150px 0", backgroundColor: "#000000" }}>
            <Col span={24} className="container">
                <Row>
                    <div className="background-overlay">
                        <Particles params={{
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
                        }} />
                    </div>
                </Row>
                <Row>
                    <div className="container z-1" style={{ position: 'inherit' }}>
                        <Col>
                            <Row gutter={16}>
                                <Col {...spanL}>
                                    <Image src={profilePhoto} />
                                </Col>
                                <Col {...spanR} className="text-white">
                                    <h2 className="text-white">Gustavo Adolfo L</h2>
                                    <h4 className="text-white">Website Developer</h4>
                                    <p><strong>Location: </strong>46 Arrabri Ave Jindalee QLD 4074, Australia </p>
                                    <p>
                                        Founder of multiple successful tech companies – focused on solving big industry problems with innovation.
                                    </p>
                                    <p><strong>Experience: </strong>5+ years</p>
                                    <p><strong>Projects: </strong>3</p>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Row>
                <Row className="container my-5">
                    <div className="w-100">
                        <h4 className="text-white">Education</h4>
                        <Space type="panel" direction="vertical" className="w-100">
                            <Collapse defaultActiveKey={['1']} style={{ backgroundColor: "transparent", color: "#ffffff" }}>
                                <Panel header="Central Queensland University (CQU)" key="1">
                                    <p type="panel">2016 – 2018</p>
                                    <p>Master's degree, Computer Software Engineering</p>
                                </Panel>
                                <Panel header="Pokhara University" key="2">
                                    <p>2010 – 2014</p>
                                    <p>Bachelor of Computer Application (BCA), Computer Programming</p>
                                </Panel>
                            </Collapse>
                        </Space>
                        <hr className="text-white w-100" />
                    </div>
                </Row>
                <Row className="container my-5">
                    <div className="w-100">
                        <h4 className="text-white">Work History</h4>
                        <Carousel autoplay>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgOne} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgTwo} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgThree} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgFour} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgFive} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="my-3">
                                <Row style={{ width: "90%", maxWidth: "640px", margin: "auto" }}>
                                    <Col {...spanM}>
                                        <h5 className="text-white">Website Redesign and Maintain</h5>
                                        <p><strong>Company Name: </strong>Kopetsky Auto Wash, LLC</p>
                                        <p><strong>Duration: </strong>2020/7–2021/11</p>
                                        <p><strong>Website: </strong>
                                            <a href="https://www.kwash.com/">https://www.kwash.com/</a>
                                        </p>
                                        <p><strong>Framework: </strong>WordPress</p>
                                        <p><strong>Template: </strong>Custom Theme</p>
                                        <p><strong>Details: </strong>Development from Scratch</p>
                                    </Col>
                                    <Col {...spanM}>
                                        <Image src={imgSix} />
                                    </Col>
                                </Row>
                            </div>
                        </Carousel>
                    </div>
                </Row>
            </Col>
        </Row>
    );
}