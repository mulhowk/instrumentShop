import './adminReview.css'

const AdminReview = () => {

    const reviewItems = [
        { 
            id:1,
            price: "700,000 원",
            content:"이이거느못써먹ㄱㄱ삳ㄲ지ㅣㅈ다아대가알겠냐이거렁떻겟써먹는걱나진짜마잋게갓다...",
            imageSrc: "7.png",
            point:"4.5"
        },
        {
            id:2,
            price: "500,000 원",
            content:"리뷰내용2",
            imageSrc: "7.png",
            point:"3"
        }
        /* 제품이미지 + 제품이름 + 평점 +  */
    ]

    const reviewList = reviewItems.map((reviewItem) => (
        <div className="review-items" key={reviewItem.id}>
                <div className='r-i-item-tab'>
                    <div className='r-i-itme-iamge'>이미지</div>
                </div>
                <div className='r-i-review-tap'>
                    <div className='r-i-r-name'>
                        <span>{reviewItem.point}</span> 
                        야마하 퍼시피카
                    </div>
                    <div className='r-i-r-content'>
                        {reviewItem.content}
                    </div>
                </div>
        </div>
    ));

    return (
        <>
            <div className="admin-review-component">
                <div className="a-r-c-header">
                    <div className="a-r-c-header-font">
                        <span>리뷰/문의 관리</span>
                    </div>
                </div>
                <div className="a-r-c-content">
                    {/* 최신 리뷰 5개까지 보여주기 */}
                    {reviewList}
                </div>
                
            </div>
        </>
    );
}

export default AdminReview;