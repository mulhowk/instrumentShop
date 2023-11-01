import React, { useState, useEffect } from 'react';
import '../../styles/MainPage/RollingBanner.css'; // 스타일 파일을 import
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function RollingBanner() {

    const images = [
        'logo.png',
        'logo192.png',
        'basket.png',
    ];

    const totalSlides = images.length;
    const [selectedSlide, setSelectedSlide] = React.useState(0);

    const handleOnChange = (index) => {
        setSelectedSlide(index);
    };

    return (
        <div className="RollingBanner">
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
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <a href="/"><img src={image} alt={`Image ${index + 1}`} /></a>
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
        </div>
    );
}

export default RollingBanner;