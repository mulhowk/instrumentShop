import './cartItem.css';

const CartItem = () => {
    return (
        <>
            <div className="cart-item">
                <div className="cart-item-content">
                    <div className="cart-itme-img">
                        <span>이미지</span>
                    </div>
                    <div className="cart-item-description">
                        <span>상품명</span>
                        <span>옵션</span>
                    </div>
                    <div className="cart-item-price">
                        <span>가격</span>
                        <div className="cart-item-ea">
                            <div className="c-i-ea-box">
                            </div>
                        </div>
                    </div>
                    <div className="cart-item-coupon">
                            <span>쿠폰 적용하기</span>
                        </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;