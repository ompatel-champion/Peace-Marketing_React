import { Component } from "react";

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
            textAlign: "center",
            paddingRight: "35%"
        };
        const arrowDownStyle = {
            color: "#f9e54c",
            fontWeight: "600",
            fontSize: "64px"
        };
        let arrowDownUrl = "/#home-what-we-do";

        return (
            <section id='home-banner'  className="row g-0 vh-100 align-items-center">
                <div className="background-overlay"></div>
                <div className="container z-1">
                    <div className="row g-0">
                        <div className="col">
                            <h1 className="text-white text-center">Digital transformation for your brand</h1>
                        </div>
                    </div>
                    <div style={subTitleStyle} className="row m-auto align-items-center">
                        <div className="col col-lg-3 col-md-3 col-sm-12 col-12">
                            <div style={lineStyle} className="m-auto"></div>
                        </div>
                        <div className="col col-lg-9 col-md-9 col-sm-12 col-12">
                            <h5 className="text-white">At Peace Marketing we provide your business with strategic, data-driven, creative marketing advice to succeed in a digital landscape.</h5>
                        </div>
                    </div>
                    <div className="row g-0">
                        <a href={arrowDownUrl} style={arrowADownStyle}>
                            <i style={arrowDownStyle} className="fa fa-angle-down"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeBanner;