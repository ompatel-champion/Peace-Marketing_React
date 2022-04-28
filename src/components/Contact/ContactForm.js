import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, InputNumber, Button } from "antd";

export const ContactForm = () => {
    const form = useRef();
    const [subscribeRes, setSubscribeRes] = useState('');

    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };
    const onFinish = (values) => {
        console.log(values);
        emailjs
            .sendForm(
                'service_n003ad7',
                'template_0snm518',
                "#contact_form",
                'user_g3IILZ4agZB3VqkwvuOlC'
            )
            .then(
                (result) => {
                    setSubscribeRes('Email sent successfully!');
                },
                (error) => {
                    setSubscribeRes('FAILED...' + error);
                }
            );
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

    return (
        <Form ref={form} {...layout} name="nest-messages" id="contact_form" onFinish={onFinish} validateMessages={validateMessages} style={{ maxWidth: "480px", width: "90%", margin: "auto" }}>
            <h3 className="text-white">Schedule a free consultation</h3>
            <p>Initial meetings with people like you are the highlights of our day. Love to hear about ideas and how we can help make them real!</p>
            <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input name='name' style={{ backgroundColor: "#00000000", borderColor: "#ffffff" }} />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                        required: true
                    },
                ]}
            >
                <Input name='email' style={{ backgroundColor: "#00000000", borderColor: "#ffffff" }} />
            </Form.Item>
            <Form.Item
                name={['user', 'phone']}
                label="Phone Number"
                rules={[
                    {
                        type: 'number',
                    },
                ]}
            >
                <InputNumber name='phone' style={{ backgroundColor: "#00000000", borderColor: "#ffffff", width: "100%" }} />
            </Form.Item>
            <Form.Item name={['user', 'description']} label="Description">
                <Input.TextArea name='description' rows={5} style={{ backgroundColor: "#00000000", borderColor: "#ffffff" }} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" style={{ backgroundColor: "#f9e54c", color: "#000", width: "100%" }}>
                    Submit
                </Button>
            </Form.Item>
            <p className="mt-3 text-white text-center">{subscribeRes}</p>
        </Form>
    );
};