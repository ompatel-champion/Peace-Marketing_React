import { Component } from "react";
// import axios from "axios";
// import { response } from "express";
import { send } from 'emailjs-com';

class HomeSubscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    }

    state = {
        subscribeRes: ''
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }

    onMsgChange(event) {
        this.setState({ message: event.target.value })
    }

    submitEmail(e) {
        e.preventDefault();

        // axios({
        //     method: "POST",
        //     // url: "http://localhost:3001/send",
        //     url: "https://www.react.peace-marketing.com:3001/send",
        //     data: { name: this.state.name, to: this.state.email }
        // }).then((response) => {
        //     console.log(response);
        //     if (response.data.status === 'success') {
        //         this.setState({ subscribeRes: 'Email sent successfully!' });
        //         this.resetForm();
        //     } else if (response.data.status === 'fail') {
        //         this.setState({ subscribeRes: 'FAILED...' });
        //     }
        // });

        send(
            'service_n003ad7',
            'template_0snm518',
            this.state,
            'user_g3IILZ4agZB3VqkwvuOlC'
        )
            .then((response) => {
                this.setState({ subscribeRes: 'Email sent successfully!' });
            })
            .catch((err) => {
                this.setState({ subscribeRes: 'FAILED...' + err });
            });
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    render() {
        let facebookUrl = "https://www.facebook.com/dragon.soft.star.forest/";
        let skypeUrl = "skype:silverstar710rich?chat";
        let linkedinUrl = "https://www.linkedin.com/in/jacob-davidson-73a7a7223/";

        return (
            <section id="home-subscribe" className="pb-5 pt-5 bg-secondary">
                <div className="background-overlay"></div>
                <div className="container z-1">
                    <div className="row">
                        <h3 className="text-white text-center">
                            Subscribe To Our Newsletter
                        </h3>
                        <p className="text-white text-center">
                            Get free tips, right in your inbox.
                        </p>
                    </div>

                    <div className="row">
                        <form id="subscribe-form" className="pt-5 pb-5" onSubmit={this.submitEmail.bind(this)} method="POST">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-8">
                                        <input placeholder="Email" id="email" type="email" className="form-control" aria-describedby="emailHelp" required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                    </div>
                                    <div className="col-md-4">
                                        <button type="submit" className="primary-btn submit main-btn">Subscribe Now!</button>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="mt-3 text-white text-center">{this.state.subscribeRes}</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="row social-icons">
                        <a href={facebookUrl} target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href={skypeUrl} target="_blank" rel="noreferrer">
                            <i className="fab fa-skype"></i>
                        </a>
                        <a href={linkedinUrl} target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeSubscribe;