import './myPageReviewStart.css';

const MyPageReviewStar = () => {
    return (
        <>
        <div className='m-r-t-top'>
            <div className='mypage-review-top-title'>
                <h1>상품이름</h1>
            </div>
            <div className='mypage-review-star'>
                <div className='mypage-review-star-content'>
                    <div className='mypage-review-star-content-title'>
                        <div className='mypage-review-star-content-title-text'>
                            <p>평점을 선택해주세요.</p>
                        </div>
                        <div style={{height: "100px"}}>
                            {/*여기*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
}

export default MyPageReviewStar;