import React, { useRef } from 'react';
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";

function MyImageSlider() {
    const slideImages = [img1, img2, img3, img4];
    let slideRef = useRef();

    const properties = {
        duration: 3000,
        autoplay: true,
        transitionDuration: 400,
        arrows: true,
        infinite: true,
        // easing: "ease",
        indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    return (
        <Slide ref={slideRef} {...properties}>
            {slideImages.map((each, index) => (
                <div key={index} className="each-slide">
                    <img className="lazy" src={each} alt="sample" height={400} width="100%" />
                </div>
            ))}
        </Slide>
    );
}

export default MyImageSlider;
