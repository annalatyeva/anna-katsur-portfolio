import React, { useEffect, useState } from 'react';
import "./Main.scss"
import main_img_1 from "../../assets/images/main_img_1.png";
import main_img_2 from "../../assets/images/main_img_2.png";
import main_img_3 from "../../assets/images/main_img_3.png";
import main_img_4 from "../../assets/images/main_img_4.png";
import main_img_5 from "../../assets/images/main_img_5.png";
import main_img_6 from "../../assets/images/main_img_6.png";


const Main = () => {
    const images = [main_img_1, main_img_2, main_img_3, main_img_4, main_img_5, main_img_6];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000); 

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="main">
            <div className="main_images">
            <img src={images[(currentImageIndex) % images.length]} alt={`img${(currentImageIndex % images.length) + 1}`} className="main_images-item fade" />
            </div>
                <div className="main_title">
                <p>CREATIVE DIRECTOR</p>
                <p>AND ART DIRECTOR WITH</p>
                <p>11 YEARS EXPERIENCE</p>
            </div>
    </div>
)
};

export default Main;



