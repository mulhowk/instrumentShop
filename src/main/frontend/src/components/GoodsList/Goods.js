import React, {useEffect, useState} from 'react';
import "../../styles/GoodsList/Goods.css"
import axios, {request} from "axios";

function Goods(props){

    const categoryId = props.categoryId;
    const subCategoryId = props.subCategoryId;
    const query = props.query;

    useEffect(() => {
        if(!categoryId && !subCategoryId && query){
            axios.get(`/goodsList/query/${query}`)
                .then(response => {
                    setGoodsList(response.data);
                    const goods = response.data;
                    const requests = goods.map(goods => {
                        const goodsId = goods.goodsId;
                        return axios.get(`/goodsList/review/${goodsId}`);
                    });
                   Promise.all(requests)
                       .then(responses => {
                       const review = responses.map(response => response.data);
                       console.log(review)
                       setReviewInfo(review);
                   })
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                }, [query]);
        } else if(categoryId && !subCategoryId){
            axios.get(`/goodsList/${categoryId}`)
                .then(response => {
                    setGoodsList(response.data);
                    const goods = response.data;
                    const requests = goods.map(goods => {
                        const goodsId = goods.goodsId;
                        return axios.get(`/goodsList/review/${goodsId}`);
                    });
                    Promise.all(requests)
                        .then(responses => {
                            const review = responses.map(response => response.data);
                            console.log(review)
                            setReviewInfo(review);
                        })
                })
                .catch(error => {
                    console.error('Error fetching data', error);
                }, [categoryId]);
        }else if(categoryId && subCategoryId){
            axios.get(`/goodsList/sub/${subCategoryId}`)
                .then(response => {
                    setGoodsList(response.data);
                    const goods = response.data;
                    const requests = goods.map(goods => {
                        const goodsId = goods.goodsId;
                        return axios.get(`/goodsList/review/${goodsId}`);
                    });
                    Promise.all(requests)
                        .then(responses => {
                            const review = responses.map(response => response.data);
                            console.log(review)
                            setReviewInfo(review);
                        })
                })
                .catch(error => {
                    console.error('Error fetching data', error);
                }, [subCategoryId]);
        }
    }, [query, categoryId, subCategoryId]);


    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('최신순');

    const options = ['최신순', '낮은가격순', '높은가격순', '리뷰많은순', '판매순'];

    const [goodsList, setGoodsList] = useState(null);
    const [reviewInfo, setReviewInfo] = useState(null);

    const itemPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const goodsListLength = (goodsList && goodsList.length) || 0;

    const totalPageCount = Math.ceil( goodsListLength / itemPerPage);

    const startIndex = (currentPage -1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentData = (goodsList && goodsList.slice(startIndex, endIndex)) || null;

    const handlePageChange = (newPage) => {
        if(newPage >= 1 && newPage <= totalPageCount){
            setCurrentPage(newPage);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPageCount; i++){
            pageNumbers.push(
                <span
                    key={i}
                    className={i === currentPage ? 'active' : ''}
                    onClick={() => handlePageChange(i)}
                    style={{margin : '10px'}}
                >
                    {i}
                </span>
            );
        }
        return pageNumbers;
    };

    const showPreviousButton = currentPage > 1 ;
    const showNextButton = currentPage < totalPageCount;

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) =>{
        setSelectedOption(option);
        setIsOpen(false);
    };

    return(
        <div>
        <div className="goods-list">
           <div className="goods-list-header">
            <div className="goods-list-count">
                TOTAL &nbsp; <span style={{color : "white"}}>{goodsListLength}</span> &nbsp; ITEMS
            </div>
            <div className="goods-list-dropdown">
                <button onClick={toggleDropdown} className="dropdown-btn">
                    {selectedOption} ▼
                </button>
                {isOpen && (
                    <div className="dropdown-option">
                        {options.map((option, index) => (
                            <a key={index} onClick={() => handleOptionClick(option)}>{option}</a>
                        ))}
                    </div>
                )}
            </div>
           </div>
            {currentData !== null ?
                (
                <div className="goods">
                {currentData.map((goods, index) => (
                        <div className="product">
                       <div className="product-img">
                           <a href={`/goodsDetails/${goods.goodsId}`}>
                               <img src={`${goods.goodsImg}`} alt={goods.goodsId}/>
                           </a>
                       </div>
                        <div className="product-title">
                            <a href={`/goodsDetails/${goods.goodsId}`}>{goods.goodsName}</a>
                        </div>
                        <div className="product-footer">
                          <div className="product-price">
                           <a>{goods.goodsQuantity === 0 ?
                               (<span style={{color : "red"}}>Sold Out</span>) :
                                (goods.goodsPrice === 0 ?
                                   (<span style={{color : "red"}}>전화문의</span>) :(
                                    goods.goodsPrice.toLocaleString() + " 원")
                                )}</a>
                          </div>
                          <div className="product-review">
                            <a>{reviewInfo?.[index][1] === 0 ?
                                "" : "★" + reviewInfo?.[index][0].toFixed(1) + "(" + reviewInfo?.[index][1] + ")"}
                                </a>
                          </div>
                        </div>

                    </div>
                ))}
            </div>
                )
                : (
                <div className="not-goods">
                    <p>상품이 존재하지 않습니다.</p>
                </div>
                )
            }
            <div className="page-nav">
                {showPreviousButton && (<button onClick={() => handlePageChange(currentPage - 1)}
                    className="goods-list-prev">
                        《
                </button>
                    )}
                <span style={{margin: '15px', color : "#AAAAAA"}}>{renderPageNumbers()}</span>
                {showNextButton && (<button onClick={() => handlePageChange(currentPage + 1)}
                    className="goods-list-next">
                        》
                </button>
                    )}
            </div>
        </div>
        </div>
    );
}

export default Goods;