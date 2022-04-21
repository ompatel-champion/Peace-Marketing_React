import { Component } from "react";

import howWeHelpIco from "../../assets/imgs/icons/how-we-help-icon.png";

class HomeSuccess extends Component {
    onLoadLetterAnimation() {
        let i = 0
        setInterval(function () {
            let elements = document.getElementsByClassName('letter-anim');
            for (let j = 0; j < elements.length; j++) {
                if (j * 1 === i * 1) {
                    elements[j].style.display = "inline";
                } else {
                    elements[j].style.display = "none";
                }
            }

            i += 1;
            if (i > 2) {
                i = 0;
            }
        }, 3000);
    }

    render() {
        const typeStyle = {
            color: "#f9e54c"
        }
        let howWeHelpLink = "/#";

        return (
            <section id="home-success" className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 col-sm-12 col-12">
                            <h2 className="text-white pb-3">How we<span> </span>
                                <span style={typeStyle} className="letter-anim pAnimation">
                                    <span>P</span>
                                    <span>r</span>
                                    <span>o</span>
                                    <span>m</span>
                                    <span>o</span>
                                    <span>t</span>
                                    <span>e</span>
                                </span>
                                <span style={typeStyle} className="letter-anim tAnimation">
                                    <span>T</span>
                                    <span>r</span>
                                    <span>a</span>
                                    <span>n</span>
                                    <span>s</span>
                                    <span>f</span>
                                    <span>o</span>
                                    <span>r</span>
                                    <span>m</span>
                                </span>
                                <span style={typeStyle} className="letter-anim sAnimation">
                                    <span>S</span>
                                    <span>u</span>
                                    <span>c</span>
                                    <span>c</span>
                                    <span>e</span>
                                    <span>e</span>
                                    <span>d</span>
                                </span>
                            </h2>
                            <p className="text-white pb-3">
                                Our approach to all projects is to achieve the best outcomes for our clients. We put your end consumer at the heart of all we do.
                            </p>

                            <a href={howWeHelpLink} className="main-btn">
                                HOW WE HELP
                            </a>
                        </div>
                        <div className="col col-md-6 col-sm-12 col-12 text-center">
                            <img src={howWeHelpIco} alt="Peace Marketing How We Help" />
                        </div>
                    </div>
                </div>
                {this.onLoadLetterAnimation()}
            </section>
        );
    }
}

export default HomeSuccess;