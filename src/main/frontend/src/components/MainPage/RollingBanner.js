import React, { useState, useEffect } from 'react';
import '../../styles/MainPage/RollingBanner.css'; // 스타일 파일을 import
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function RollingBanner() {

    const images = [
        {
            img : '/RollingBanner/1.png',
            href : '/goodsList/category/색소폰'
        },
        {
            img : '/RollingBanner/2.png',
            href: '/goodsDetails/2023112225'
        },
        {
            img : '/RollingBanner/3.png',
            href: '/goodsList/category/색소폰/소프라노색소폰'
        },
        {
            img : '/RollingBanner/4.png',
            href: '/goodsDetails/2023112225'
        },
        {
            img : '/RollingBanner/5.png',
            href: '/goodsDetails/2023112225'
        }
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
            <div className="custom-carousel">
                <button onClick={goToPreviousImage} className="prev-button"></button>
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
                        <a href={image.href}>
                        <div key={index} className="custom-img">
                                <img
                                    src={image.img}
                                    alt={`Image ${index + 1}`}
                                />
                        </div>
                        </a>
                    ))}
                </Carousel>
                <button onClick={goToNextImage} className="next-button"></button>
            </div>
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
    );
}

export default RollingBanner;