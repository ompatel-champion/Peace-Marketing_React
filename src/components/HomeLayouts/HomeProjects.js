import { Component } from "react";
import Slider from "react-slick";

import imgOne from '../../assets/imgs/home/1.webp';
import imgTwo from '../../assets/imgs/home/2.webp';
import imgThree from '../../assets/imgs/home/3.webp';
import imgFour from '../../assets/imgs/home/4.webp';
import imgFive from '../../assets/imgs/home/5.webp';
import imgSix from '../../assets/imgs/home/6.webp';

class HomeProjects extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const imgStyle = {
            width: "90%",
            height: "auto",
            maxWidth: "420px",
            margin: "auto"
        }

        return (
            <section id="home-projects" className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <h2 className="text-white">
                            Projects we Love
                        </h2>
                    </div>
                    <div className="row pt-5 pb-5 text-white text-center">
                        <Slider {...settings}>
                            <div>
                                <img src={imgOne} style={imgStyle} alt="" />
                            </div>
                            <div>
                                <img src={imgTwo} style={imgStyle} alt="" />
                            </div>
                            <div>
                                <img src={imgThree} style={imgStyle} alt="" />
                            </div>
                            <div>
                                <img src={imgFour} style={imgStyle} alt="" />
                            </div>
                            <div>
                                <img src={imgFive} style={imgStyle} alt="" />
                            </div>
                            <div>
                                <img src={imgSix} style={imgStyle} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>

            </section>

        );
    }
}

export default HomeProjects;