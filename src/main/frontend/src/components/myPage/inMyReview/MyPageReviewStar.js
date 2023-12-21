import './myPageReviewStart.css';
import React, {useEffect, useState} from "react";

const MyPageReviewStar = ({onStarChange, goods}) => {

    const goodsData = goods;

    const [reviewScore, setReviewScore] = useState(null);
    const [reviewTitle, setReviewTitle] = useState();

    useEffect(() => {

        const reviewData = {reviewScore, reviewTitle};

        onStarChange(reviewData);

    }, [reviewScore, reviewTitle]);
    const handleStarValue = (clickedStar) => {
        const updateStars = stars.map((star) => ({
            value : star.value,
            selected : star.value <= clickedStar,
        }));
        setStars(updateStars);
        const selectedObjects = updateStars.filter(obj => obj.selected === true);
        setReviewScore(selectedObjects.length / 2);
    };


    const handleTitleChange = (e) => {
        setReviewTitle(e.target.value);
    }


    const [stars, setStars] = useState([
        {value: 0.5, selected: false},
        {value : 1, selected: false},
        {value: 1.5, selected: false},
        {value: 2, selected: false},
        {value: 2.5, selected: false},
        {value: 3, selected: false},
        {value: 3.5, selected: false},
        {value: 4, selected: false},
        {value: 4.5, selected: false},
        {value: 5, selected: false}
    ]);

    return (
        <>
        <div className='m-r-t-top'>
            <div className='mypage-review-top-title'>
                <h2>{goods.goodsName}</h2>
                <img src = {goods.goodsImg} alt={goods.goodsId} style={{width : "200px", height : "200px"}}/>
            </div>
            <div className='mypage-review-star'>
                <div className='mypage-review-star-content'>
                    <div className='mypage-review-star-content-title'>
                        <div className='mypage-review-star-content-title-text'>
                            <p>평점을 선택해주세요.</p>
                        </div>
                        <div style={{height: "100px"}}>
                            <div className="review-score-star">
                                {stars.map((star) => (
                                    <div key={star.value} className="star-wrapper">
                                    <span
                                    className={`star ${star.selected  ? 'selected' : ''}`}
                                    style={{ color: star.selected ? 'red': 'black'}}
                                    onClick={() => handleStarValue(star.value)}
                                    >★</span>
                                        <span className="star-rating-value"
                                              style={{ color: star.selected ? 'red' : 'black'}}>{star.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="review-title-area">
                                <p>제목</p>
                                <textarea placeholder="제목을 입력해주세요"
                                          value={reviewTitle}
                                          onChange={handleTitleChange}
                                          />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
}

export default MyPageReviewStar;