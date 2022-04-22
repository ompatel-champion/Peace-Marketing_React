import { Component } from "react";
import Particles from "react-tsparticles";
import { Row, Col, Form, Input, InputNumber, Button } from "antd";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export default function Contact() {
    let span = {
        lg: 12,
        md: 12,
        sm: 24
    }
    const onFinish = (values) => {
        console.log(values);
    };

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
                                <Col {...span}>
                                    <h3 className="text-white">What happens next?</h3>
                                    <ul class="ps-contact__text-list">
                                        <li>
                                            We’ll contact you within three business days of receiving your submission and schedule a free video call to get to know each other and learn your requirements.
                                        </li>
                                        <li>
                                            When required by you, we’re happy to sign an NDA to ensure total comfort.
                                        </li>
                                        <li>We’ll meet as necessary to understand all your needs and one of our business analysts will submit to you a comprehensive project proposal.
                                        </li>
                                        <li>We’ll assemble the team for your project and can start delivering within seven business days!
                                        </li>
                                    </ul>
                                </Col>
                                <Col {...span}>
                                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                        <Form.Item
                                            name={['user', 'name']}
                                            label="Name"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={['user', 'email']}
                                            label="Email"
                                            rules={[
                                                {
                                                    type: 'email',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={['user', 'age']}
                                            label="Age"
                                            rules={[
                                                {
                                                    type: 'number',
                                                    min: 0,
                                                    max: 99,
                                                },
                                            ]}
                                        >
                                            <InputNumber />
                                        </Form.Item>
                                        <Form.Item name={['user', 'website']} label="Website">
                                            <Input />
                                        </Form.Item>
                                        <Form.Item name={['user', 'introduction']} label="Introduction">
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Row>
            </Col>
        </Row>
    );
}

