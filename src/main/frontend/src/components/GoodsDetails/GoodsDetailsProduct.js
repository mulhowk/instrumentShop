import React, {useState} from 'react';
import "../../styles/GoodsDetails/GoodsDetailsProduct.css";
import {Link} from "react-router-dom";

function GoodsDetailsProduct(props) {

    const goods = props.goods;
    const goodsOption = goods.options;
    const [selectOptions, setSelectOptions] = useState("");
    const handleSelectOptions = (event) => {
        const selectedText = event.target.value;
        setSelectOptions(selectedText);
    };

    const [count, setCount] = useState(1);

    const increment = () => {
        if (count === 9) {
            alert("최대 9개만 구매 가능합니다.")
        } else {
            setCount(count + 1);
        }

    };

    const decrement = () => {
        if (count === 1) {
            alert("개수 1 미만으로는 설정할 수 없습니다.")
        } else {
            setCount(count - 1);
        }
    };

    return (
        <div className="product-area">
            <div className="product-area-img">
                <img src={goods.goodsImg} alt="product-img"/>
            </div>
            <div className="product-area-info">
                <div className="product-area-title">
                    <h1 style={{color: "white"}}>{goods.goodsName}</h1>
                </div>
                <div className="product-area-price">
                    <div className="product-area-price-title">
                        <p style={{color: "white"}}>판매가격</p>
                    </div>
                    <div className="product-area-price-price">
                        <p style={{color: "white"}}>{goods.goodsPrice.toLocaleString()} 원</p>
                    </div>
                </div>
                <div className="product-area-deliver">
                    <div className="product-area-deliver-title">
                        <p style={{color: "white"}}>배송비</p>
                    </div>
                    <div className="product-area-deliver-price">
                        <p style={{color: "white"}}>총 결제금액 5만원 미만시 배송비 3,000원이 추가됩니다.(제주, 산간 제외)</p>
                    </div>
                </div>
                <div className="product-area-brand">
                    <div className="product-area-brand-title">
                        <p style={{color: "white"}}>브랜드</p>
                    </div>
                    <div className="product-area-brand-price">
                        <p style={{color: "white"}}>{goods.goodsBrand}</p>
                    </div>
                </div>
                {goods.goodsOption &&
                    <div className="product-area-options">
                        <div className="product-area-options-title">
                            <p style={{color: "white"}}>{goods.goodsOption}</p>
                        </div>

                        <select onChange={handleSelectOptions}>
                            <option value="">옵션을 선택해주세요.</option>
                            {Object.values(goodsOption[0]).slice(1,6).map((option, index) =>
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            )}
                        </select>
                    </div>
                }
                <div className="line"></div>
                {goods.goodsOption ?
                    (selectOptions ?
                            (selectOptions === '옵션을 선택해주세요.' ?
                                    (
                                        <div className="product-area-count" style={{color: "white"}}>옵션을 선택해 주세요</div>
                                    ) :
                                    (<div>
                                            <div className="product-area-count">
                                                <div className="product-area-count-title">
                                                    <span
                                                        style={{color: "black"}}>{selectOptions} </span>
                                                    {goods.goodsName}
                                                </div>
                                                <div className="product-area-count-count">
                                                    <button onClick={decrement}
                                                            style={{marginRight: "5px", fontSize: "15px"}}>-
                                                    </button>
                                                    <p>{count}</p>
                                                    <button onClick={increment} style={{marginLeft: "5px"}}>+</button>
                                                </div>
                                                <div className="product-area-count-price">
                                                    <p>{(goods.goodsPrice * count).toLocaleString()} 원</p>
                                                </div>
                                            </div>
                                            <div className="product-area-total">
                                                <div className="product-area-total-title">
                                                    <p style={{color: "white"}}>TOTAL</p>
                                                </div>
                                                <div className="product-area-total-price">
                                                    <p style={{color: "white"}}>
                                                        {(goods.goodsPrice * count).toLocaleString()} 원
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )

                            ) :
                            (
                                <div className="product-area-count" style={{color: "white"}}>
                                    옵션을 선택해 주세요
                                </div>
                            )
                    ) :
                    (
                        <div>
                        {goods.goodsPrice !==0 ?
                            (goods.goodsQuantity !==0 ?
                                (
                        <div>
                            <div className="product-area-count">
                                <div className="product-area-count-title">
                                    {goods.goodsName}
                                </div>
                                <div className="product-area-count-count">
                                    <button onClick={decrement} style={{marginRight: "5px", fontSize: "15px"}}>-
                                    </button>
                                    <p>{count}</p>
                                    <button onClick={increment} style={{marginLeft: "5px"}}>+</button>
                                </div>
                                <div className="product-area-count-price">
                                    <p>{(goods.goodsPrice * count).toLocaleString()} 원</p>
                                </div>
                            </div>
                            <div className="product-area-total">
                                <div className="product-area-total-title">
                                    <p style={{color: "white"}}>TOTAL</p>
                                </div>
                                <div className="product-area-total-price">
                                    <p style={{color: "white"}}>
                                        {(goods.goodsPrice * count).toLocaleString()} 원
                                    </p>
                                </div>
                            </div>
                        </div>) : (
                            <div className="quantity-zero">
                                <p>품절</p>
                            </div>))
                        : (
                            <div className="price-zero">
                                <p>전화문의</p>
                                <p>080-335-0020</p>
                            </div>)
                            }
                        </div>
                    )
                }
                <div>
                    {goods.goodsPrice !== 0 ?(
                        goods.goodsQuantity !== 0 ?
                            (<div className="product-area-button">
                    <Link to="/goodsPayment">
                    <button style={
                        {
                            backgroundColor: "white",
                            color: "black", width: "190px", marginRight: "20px",
                            cursor : "pointer"
                        }}>구매하기
                    </button>
                    </Link>
                    <button style={{
                        backgroundColor: "black",
                        color: "white", width: "200px", marginRight: "20px",
                        cursor : "pointer"
                    }}>장바구니
                    </button>
                    <button style={{
                        backgroundColor: "white",
                        color: "black", width: "80px",
                        cursor : "pointer"
                    }}>♡
                    </button>
                </div>) : ("")) : ("")}
                </div>
            </div>
        </div>
    );
}

export default GoodsDetailsProduct;