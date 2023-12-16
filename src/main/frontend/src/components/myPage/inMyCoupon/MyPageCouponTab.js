import './myPageCouponTab.css';

const MyPageCouponTab = () => {

    const couponList = [
        {
            id: 1,
            name: '전 제품 20% 할인(최대 5만원)',
            discount: '20%',
            description: '최대 5만원 할인, 패키지 제품 제외',
            date: '2024년 01월 03일 24시까지'
        }
    ]

    return(
    <>
        {couponList.map((coupon) => (
            <div key={coupon.id} className="coupon-content-tab">
                <div className="coupon-discount">
                    <span>{coupon.discount} 할인</span>
                </div>
                <div className="coupon-title">
                    <span>{coupon.name}</span>
                </div>
                <div className="coupon-description">
                    <span>{coupon.description}</span>
                </div>
                <div className="coupon-date">
                    <span>{coupon.date}</span>
                </div>
            </div>
        ))}
    </>
    );
}

export default MyPageCouponTab;