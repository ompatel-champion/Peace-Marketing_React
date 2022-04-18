import { Component } from 'react';
// import axios from "axios";
import './Header.css';
import siteLogo from '../assets/imgs/Logo-White.png';
import { send } from 'emailjs-com';
import { Link } from "react-router-dom";

class Header extends Component {
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
        //     if (response.data.status === 'success') {
        //         this.setState({ subscribeRes: 'Email sent successfully!' });
        //         this.resetForm()
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
        const smallFont = {
            fontSize: "12px",
            backgroundColor: "transparent",
            height: "auto"
        }

        const headerStyle = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }

        const menuUrl = {
            home: "/",
            about: "/about",
            info: "/info",
            contact: "/contact",
        }

        return (
            <header>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <li className="active">
                                <Link to={menuUrl.home}>Home</Link>
                            </li>
                            <li>
                                <Link to={menuUrl.about}>About</Link>
                            </li>
                            <li>
                                <Link to={menuUrl.info}>Info</Link>
                            </li>
                            <li>
                                <Link to={menuUrl.contact}>Contact</Link>
                            </li>

                            <div id="menu-bottom">
                                <form id="menu-form" className="pt-5 pb-5" onSubmit={this.submitEmail.bind(this)} method="POST">
                                    <div className="form-group">
                                        <div className="text-white">
                                            <p>Book A Time To Chat</p>
                                            <p>
                                                <span style={smallFont}>Or Stay In Touch And Get Some Of The Best Tips, Tricks And Latest Updates Right In Your Inbox</span>
                                            </p>
                                            <input placeholder="Name" id="menu-name" type="text" className="form-control" aria-describedby="nameHelp" required value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                            <input placeholder="Email" id="menu-email" type="email" className="form-control" aria-describedby="emailHelp" required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                            <button type="submit" className="primary-btn submit main-btn">Stay In Touch!</button>
                                            <p className="mt-3 text-white text-center">{this.state.subscribeRes}</p>
                                        </div>
                                    </div>
                                </form>
                                <ul className="nav col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                    <li>
                                        <a href="https://www.facebook.com/peace-marketingau" className="nav-link text-white">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/peacemarketing" className="nav-link text-white">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/peacemarketing" className="nav-link text-white">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/peacemarketing" className="nav-link text-white">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </nav>
                <div className="text-white">
                    <div className="container">
                        <div className="row" style={headerStyle}>
                            <div style={{ width: "fit-content" }}>
                                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                    <img className="m-auto" width="240" height="auto" src={siteLogo} alt="Peace Marketing Logo" />
                                </a>
                            </div>
                            <div style={{ width: "fit-content" }}>
                                <ul className="nav col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                    <li>
                                        <a href="https://www.facebook.com/peace-marketingau" className="nav-link text-white">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/peacemarketing" className="nav-link text-white">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/peacemarketing" className="nav-link text-white">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/peacemarketing" className="nav-link text-white">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h1><a href="/" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h1>
                <p>{this.props.sub}
                </p>
            </header>
        );
    }
}

export default Header;