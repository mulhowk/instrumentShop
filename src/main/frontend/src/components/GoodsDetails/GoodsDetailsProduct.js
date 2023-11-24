import React, {useState} from 'react';
import "../../styles/GoodsDetails/GoodsDetailsProduct.css";
import {Link} from "react-router-dom";

function GoodsDetailsProduct(props) {

    const [selectOptions, setSelectOptions] = useState("");
    const handleSelectOptions = (event) => {
        const selectedText = event.target.options[event.target.selectedIndex].text;
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
                <img src={props.product.img} alt="product-img"/>
            </div>
            <div className="product-area-info">
                <div className="product-area-title">
                    <h1 style={{color: "white"}}>{props.product.title}</h1>
                </div>
                <div className="product-area-price">
                    <div className="product-area-price-title">
                        <p style={{color: "white"}}>판매가격</p>
                    </div>
                    <div className="product-area-price-price">
                        <p style={{color: "white"}}>{props.product.price.toLocaleString()} 원</p>
                    </div>
                </div>
                <div className="product-area-deliver">
                    <div className="product-area-deliver-title">
                        <p style={{color: "white"}}>배송비</p>
                    </div>
                    <div className="product-area-deliver-price">
                        <p style={{color: "white"}}>{props.product.deliver}</p>
                    </div>
                </div>
                {props.product.brand &&
                <div className="product-area-brand">
                    <div className="product-area-brand-title">
                        <p style={{color: "white"}}>브랜드</p>
                    </div>
                    <div className="product-area-brand-price">
                        <p style={{color: "white"}}>{props.product.brand}</p>
                    </div>
                </div>}
                {props.product.options &&
                    <div className="product-area-options">
                        <div className="product-area-options-title">
                            <p style={{color: "white"}}>{props.product.optionType}</p>
                        </div>

                        <select onChange={handleSelectOptions}>
                            <option value="">옵션을 선택해주세요.</option>
                            {props.product.options.map((option, index) => (
                                <option key={index} value={`option${index + 1}`}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                }
                <div className="line"></div>
                {props.product.optionType ?
                    (selectOptions ?
                            (selectOptions === '옵션을 선택해주세요.' ?
                                    (
                                        <div className="product-area-count" style={{color: "white"}}>옵션을 선택해 주세요</div>
                                    ) :
                                    (<div>
                                            <div className="product-area-count">
                                                <div className="product-area-count-title">
                                                    <span
                                                        style={{color: "black"}}>{selectOptions}</span> {props.product.title}
                                                </div>
                                                <div className="product-area-count-count">
                                                    <button onClick={decrement}
                                                            style={{marginRight: "5px", fontSize: "15px"}}>-
                                                    </button>
                                                    <p>{count}</p>
                                                    <button onClick={increment} style={{marginLeft: "5px"}}>+</button>
                                                </div>
                                                <div className="product-area-count-price">
                                                    <p>{(props.product.price * count).toLocaleString()} 원</p>
                                                </div>
                                            </div>
                                            <div className="product-area-total">
                                                <div className="product-area-total-title">
                                                    <p style={{color: "white"}}>TOTAL</p>
                                                </div>
                                                <div className="product-area-total-price">
                                                    <p style={{color: "white"}}>
                                                        {(props.product.price * count).toLocaleString()} 원
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
                            <div className="product-area-count">
                                <div className="product-area-count-title">
                                    {props.product.title}
                                </div>
                                <div className="product-area-count-count">
                                    <button onClick={decrement} style={{marginRight: "5px", fontSize: "15px"}}>-
                                    </button>
                                    <p>{count}</p>
                                    <button onClick={increment} style={{marginLeft: "5px"}}>+</button>
                                </div>
                                <div className="product-area-count-price">
                                    <p>{(props.product.price * count).toLocaleString()} 원</p>
                                </div>
                            </div>
                            <div className="product-area-total">
                                <div className="product-area-total-title">
                                    <p style={{color: "white"}}>TOTAL</p>
                                </div>
                                <div className="product-area-total-price">
                                    <p style={{color: "white"}}>
                                        {(props.product.price * count).toLocaleString()} 원
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="product-area-button">
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
                </div>
            </div>
        </div>
    );
}

export default GoodsDetailsProduct;