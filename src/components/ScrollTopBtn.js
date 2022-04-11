import { Component } from "react";


class ScrollTopBtn extends Component {
    scrollToTop(duration) {
        // cancel if already on top
        if (document.scrollingElement.scrollTop === 0) return;

        const totalScrollDistance = document.scrollingElement.scrollTop;
        let scrollY = totalScrollDistance, oldTimestamp = null;

        function step(newTimestamp) {
            if (oldTimestamp !== null) {
                // if duration is 0 scrollY will be -Infinity
                scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
                if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
                document.scrollingElement.scrollTop = scrollY;
            }
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }

    render() {
        const scrollTopBtnStyle = {
            position: "fixed",
            right: "20px",
            bottom: "20px",
            width: "32px",
            height: "32px",
            backgroundColor: "rgba(249,229,76,0.9)",
            textAlign: "center",
            cursor: "pointer",
            zIndex: "999"
        }
        const btnArrowStyle = {
            color: "black",
            fontWeight: "bold",
            lineHeight: "32px"
        }
        let scrollTopLink = "#";
        return (
            <a id="scroll-top" href={scrollTopLink} onClick={this.scrollToTop(5000)} style={scrollTopBtnStyle}>
                <i className="fa fa-angle-up" style={btnArrowStyle}></i>
            </a>
        )
    }
}

export default ScrollTopBtn;