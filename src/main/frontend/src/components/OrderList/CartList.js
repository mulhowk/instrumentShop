const CartList = () => {
    return (
        <>
            <div className="cart-component">
                <div className="cart-component-title">
                    <div className="c-c-inner-title">
                        <h3 className="c-c-i-h3">장바구니</h3>
                    </div>
                </div>
                <div className="cart-component-conent">
                    <div className="c-c-header">
                        <div className="c-c-h-check-input">
                            <input type="checkbox"></input>
                        </div>
                        <div className="c-c-h-span">
                            <span>전체선택</span>
                        </div>
                    </div>
                    <div className="c-c-list">

                    </div>
                    <div className="c-c-total-price">

                    </div>
                </div>
            </div>
        </>
    );
}

export default CartList;