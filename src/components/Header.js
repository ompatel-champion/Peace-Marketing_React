import { Component } from 'react';
// import axios from "axios";
import './Header.css';
import siteLogo from '../assets/imgs/Logo-White.png';
import { send } from 'emailjs-com';
import { Link } from "react-router-dom";
import { Row, Col, Menu } from "antd";

const { SubMenu } = Menu;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            hide: false
        };
    }
    state = {
        subscribeRes: '',
    }

    menuHide() {
        this.setState({ hide: true });
        alert(this.state.hide);
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

        const menuUrl = {
            home: "/",
            about: "/about",
            contact: "/contact",
        }
        const { handleClick } = this.props;
        const menus = [
            {
                link: "/",
                title: "Home",
                key: "home",
            },
            {
                link: "/about",
                title: "About Us",
                key: "about",
            },
            {
                link: "archives/index",
                key: "archives",
                title: "Archives",
                submenu: [
                    {
                        link: "archives/video_archives",
                        title: "Video Archives",
                        key: "video_archives",
                    },
                    {
                        link: "archives/printed_archives",
                        title: "Printed Archives",
                        key: "printed_archives",
                    },
                ],
            },
            {
                link: "/contact",
                key: "contact",
                title: "Contact Us",
            },
        ];

        let span = {
            xs: 22,
            sm: 20,
            md: 20,
            lg: 20,
            xl: 18,
            xxl: 18,
        };

        return (
            <header>
                <nav role="navigation">
                    <div id="menuToggle" className='d-none'>
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <li className="active">
                                <Link to={menuUrl.home} onClick={this.menuHide.bind()} rel="noreferrer">Home</Link>
                            </li>
                            <li>
                                <Link to={menuUrl.about} onClick={this.menuHide.bind()} rel="noreferrer">About</Link>
                            </li>
                            <li>
                                <Link to={menuUrl.contact} onClick={this.menuHide.bind()} rel="noreferrer">Contact</Link>
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
                                        <a href="https://www.facebook.com/dragon.soft.star.forest/" className="nav-link text-white" rel="noreferrer" target={"_blank"}>
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="skype:silverstar710rich?chat" className="nav-link text-white" rel="noreferrer" target={"_blank"}>
                                            <i className="fab fa-skype"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/jacob-davidson-73a7a7223/" className="nav-link text-white" rel="noreferrer" target={"_blank"}>
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </nav>
                <Row justify="space-between" align="top" className='container'>
                    <Col span={24} className="app">
                        <Row>
                            <Col className="header" span={24}>
                                <Row justify="space-around" align="middle">
                                    <Col span={6}>
                                        <Link to="/">
                                            <img
                                                src={siteLogo}
                                                className="header-logo"
                                                alt="perfect solution logo"
                                            />
                                        </Link>
                                    </Col>
                                    <Col span={12}>
                                        <Row justify="center">
                                            <Col className="main_menu" span={24}>
                                                <Menu onClick={handleClick} mode="horizontal" style={{ backgroundColor: "transparent", textAlign: "center", borderBottom: "none", justifyContent: "center" }}>
                                                    {menus.map((item) => {
                                                        if (item.submenu) {
                                                            return (
                                                                <SubMenu
                                                                    className="main_menu_item"
                                                                    key={item.key}
                                                                    title={item.title}
                                                                >
                                                                    {item.submenu.map((sub) => {
                                                                        if (sub.link.startsWith("https")) {
                                                                            return (
                                                                                <Menu.Item style={{ backgroundColor: "transparent" }} className="main_menu_item" key={sub.key}>
                                                                                    <a href={sub.link}>{sub.title}</a>
                                                                                </Menu.Item>)
                                                                        } else {
                                                                            return (
                                                                                <Menu.Item style={{ backgroundColor: "transparent" }} className="main_menu_item" key={sub.key}>
                                                                                    <Link to={sub.link}>{sub.title}</Link>
                                                                                </Menu.Item>
                                                                            )
                                                                        }
                                                                    }
                                                                    )
                                                                    }
                                                                </SubMenu>
                                                            );
                                                        } else {
                                                            return (
                                                                <Menu.Item className="main_menu_item" key={item.key}>
                                                                    <Link to={item.link}>{item.title}</Link>
                                                                </Menu.Item>
                                                            );
                                                        }
                                                    })}
                                                </Menu>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={6}>
                                        <ul className="nav col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                            <li>
                                                <a href="https://www.facebook.com/dragon.soft.star.forest/" className="nav-link text-white" rel="noreferrer" target={"_blank"}>
                                                    <i className="fab fa-facebook-f social-icons"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="skype:silverstar710rich?chat" className="nav-link text-white" rel="noreferrer" target={"_blank"}>
                                                    <i className="fab fa-skype social-icons"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/jacob-davidson-73a7a7223/" className="nav-link text-white" rel="noreferrer" target={"_blank"}>
                                                    <i className="fab fa-linkedin social-icons"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            {/* <Col span={24}>
                                <AppRoute {...props} />
                            </Col> */}
                        </Row>
                    </Col>
                </Row>
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