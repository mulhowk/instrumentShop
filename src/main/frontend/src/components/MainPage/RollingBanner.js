import React, { useState, useEffect } from 'react';
import '../../styles/MainPage/RollingBanner.css'; // 스타일 파일을 import
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function RollingBanner() {

    const images = [
        '/RollingBanner/1.png',
        '/RollingBanner/2.png',
        '/RollingBanner/3.png',
        '/RollingBanner/4.png',
        '/RollingBanner/5.png'
    ];

    const totalSlides = images.length;
    const [selectedSlide, setSelectedSlide] = React.useState(0);
    const goToPreviousImage = () => {
        // 이전 이미지로 이동
        setSelectedSlide((index) =>
            index === 0 ? images.length - 1 : index - 1
        );
    };

    const goToNextImage = () => {
        // 다음 이미지로 이동
        setSelectedSlide((index) =>
            index === images.length - 1 ? 0 : index + 1
        );
    };

    const handleOnChange = (index) => {
        setSelectedSlide(index);
    };

    return (
        <div className="RollingBanner">
            <button onClick={goToPreviousImage} className="prev-button"></button>
            <div className="custom-carousel">
                <Carousel
                    showStatus={false} // 슬라이드 인디케이터 숨기기
                    selectedItem={selectedSlide}
                    onChange={handleOnChange}
                    showIndicators={false}
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    centerMode={true}
                    showArrows={false}
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <a href="/">
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                />
                            </a>
                        </div>
                    ))}
                </Carousel>
                <div className="custom-indicators">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <div
                            key={index}
                            className={index === selectedSlide ? 'active' : ''}
                            onClick={() => handleOnChange(index)}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={goToNextImage} className="next-button"></button>
        </div>
    );
}

export default RollingBanner;