import React, {useState} from 'react';
import "../../styles/GoodsDetails/GoodsDetailsProduct.css"
import {options} from "axios";

function GoodsDetailsProduct(){

    const product = {
        id : 201311030001,
        img : '/Goods/goods1.jpeg',
        title : 'selmer(셀마) Soprano SA80 II JUBILEE1asdasdsdadadsadasdsasadsada',
        price : 700000,
        deliver : '총 결제금액 5만원 미만시 배송비 3,000원이 청구됩니다.',
        optionType : '색상',
        options : ['빨강색', '초록색', '분홍색'],
        details : '상품 상세 입니다. 이미지 url이 들어올 수도 있어요. 이미지 url이 들어온다면 따로 처리를 해야겠군요',
        review : [
            {
                num : 1,
                subject : "테스트 리뷰 1",
                name : "테스트",
                date : "2023/10/24",
                HITS : 120
            },
            {
                num : 2,
                subject : "테스트 리뷰 2",
                name : "테스트",
                date : "2023/10/24",
                HITS : 12
            }
        ],
        qna : [
            {
                num : 1,
                subject : "테스트 Q&A 1",
                name : "테스트",
                date : "2023/10/24",
                HITS : 120
            },
            {
                num : 2,
                subject : "테스트 Q&A 2",
                name : "테스트",
                date : "2023/10/24",
                HITS : 12
            }
        ]
        };

    const [selectOptions, setSelectOptions] = useState("");
    const handleSelectOptions = (event) => {
        const selectedText = event.target.options[event.target.selectedIndex].text;
        setSelectOptions(selectedText);
    }

    const [count, setCount] = useState(1);

    const increment = () => {
        if(count === 9) {
            alert("최대 9개만 구매 가능합니다.")
        }else{
                setCount(count + 1);
            }

    };

    const decrement = () => {
        if(count === 1) {
            alert("개수 1 미만으로는 설정할 수 없습니다.")
        }
            else{
                setCount(count - 1);
            }
    };

    return (
        <div className="product-area">
            <div className="product-area-img">
                <img src={product.img} alt="product-img"/>
            </div>
            <div className="product-area-info">
                <div className="product-area-title">
                    <h1 style={{color : "white"}}>{product.title}</h1>
                </div>
                <div className="product-area-price">
                   <div className="product-area-price-title">
                    <p style={{color : "white"}}>판매가격</p>
                   </div>
                   <div className="product-area-price-price">
                     <p style={{color : "white"}}>{product.price.toLocaleString()} 원</p>
                   </div>
                </div>
                <div className="product-area-deliver">
                    <div className="product-area-deliver-title">
                        <p style={{color : "white"}}>배송비</p>
                    </div>
                    <div className="product-area-deliver-price">
                        <p style={{color : "white"}}>{product.deliver}</p>
                    </div>
                </div>
                {product.options &&
                    <div className="product-area-options">
                    <div className="product-area-options-title">
                        <p style={{color : "white"}}>{product.optionType}</p>
                    </div>

                    <select onChange={handleSelectOptions}>
                            <option value="">--- 옵션을 선택해주세요. ---</option>
                        {product.options.map((option, index) => (
                            <option key={index} value={`option${index + 1}`}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                }
                <div className="line"></div>
                {product.optionType ?
                    (selectOptions ?
                        (
                            <div className="product-area-count">
                            <div className="product-area-count-title">
                                <span style={{color : "black"}}>{selectOptions}</span> {product.title}
                            </div>
                            <div className="product-area-count-count">
                                <button onClick={decrement} style={{marginRight : "5px", fontSize : "15px"}}>-</button>
                                <p>{count}</p>
                                <button onClick={increment} style={{marginLeft : "5px"}}>+</button>
                            </div>
                            <div className="product-area-count-price">
                                <p>{(product.price * count).toLocaleString()} 원</p>
                            </div>
                        </div>
                        ) : (<div className="product-area-count" style={{color : "white"}}>옵션을 선택해 주세요</div>)
                    ) :
                    (
                        <div className="product-area-count">
                            <div className="product-area-count-title">
                                {product.title}
                            </div>
                            <div className="product-area-count-count">
                                <button onClick={decrement} style={{marginRight : "5px", fontSize : "15px"}}>-</button>
                                <p>{count}</p>
                                <button onClick={increment} style={{marginLeft : "5px"}}>+</button>
                            </div>
                            <div className="product-area-count-price">
                                <p>{(product.price * count).toLocaleString()} 원</p>
                            </div>
                        </div>
                    )}
                <div className="product-area-total">
                    <div className="product-area-total-title">
                        <p style={{color : "white"}}>TOTAL</p>
                    </div>
                    <div className="product-area-total-price">
                        <p style={{color : "white"}}>{(product.price * count).toLocaleString()} 원</p>
                    </div>
                </div>
                <div className="product-area-button">
                    <button style={
                        {backgroundColor : "white",
                            color : "black", width : "250px", marginRight : "20px"}}>구매하기</button>
                    <button style={{backgroundColor : "black",
                        color : "white", width : "250px", marginRight : "20px"}}>장바구니</button>
                    <button style={{backgroundColor : "white",
                        color : "black" ,width : "80px"}}>♡</button>
                </div>
            </div>
        </div>
    );
}

export default GoodsDetailsProduct;