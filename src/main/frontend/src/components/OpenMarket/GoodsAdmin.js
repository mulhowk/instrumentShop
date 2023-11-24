import React, {useEffect, useState} from "react";
import "../../styles/OpenMarket/GoodsAdmin.css"
import {Link} from "react-router-dom";

function GoodsAdmin(){

    const openProduct = [
        {
            num : 202311111448,
            img : '../../logo.png',
            name : '엄청 긴 내용의 상품명입니다. 대충 영역 넘으면 말줄임 처리 할 거에요. 토스 간편결제 API어케 연동하노',
            price : 7000000,
            count : 25,
            country : 'FRANCE'
        },
        {
            num : 202311111449,
            img : '../../logo0.png',
            name : '엄청 긴 내용의 상품명입니다. 대충 영역 넘으면 말줄임 처리 할 거에요. 토스 간편결제 API어케 연동하노',
            price : 87000000,
            count : 20,
            country : 'KOREA'
        },
        {
            num : 202311111450,
            img : '../../logo.png',
            name : '엄청 긴 내용의 상품명입니다. 대충 영역 넘으면 말줄임 처리 할 거에요. 토스 간편결제 API어케 연동하노',
            price : 7000000,
            count : 25,
            country : 'FRANCE'
        },
        {
            num : 202311111451,
            img : '../../logo.png',
            name : '엄청 긴 내용의 상품명입니다. 대충 영역 넘으면 말줄임 처리 할 거에요. 토스 간편결제 API어케 연동하노',
            price : 7000000,
            count : 25,
            country : 'FRANCE'
        },
        {
            num : 202311111452,
            img : '../../logo.png',
            name : '엄청 긴 내용의 상품명입니다. 대충 영역 넘으면 말줄임 처리 할 거에요. 토스 간편결제 API어케 연동하노',
            price : 7000000,
            count : 25,
            country : 'FRANCE'
        },
        {
            num : 202311111453,
            img : '../../logo.png',
            name : '엄청 긴 내용의 상품명입니다. 대충 영역 넘으면 말줄임 처리 할 거에요. 토스 간편결제 API어케 연동하노',
            price : 7000000,
            count : 25,
            country : 'FRANCE'
        },
        {
            num : 202311111454,
            img : '../../logo.png',
            name : '엄청 긴 내용의 상품명입니다. 대충 영역 넘으면 말줄임 처리 할 거에요. 토스 간편결제 API어케 연동하노',
            price : 7000000,
            count : 25,
            country : 'FRANCE'
        },
        {
            num : 202311111455,
            img : '../../logo.png',
            name : '엄청 긴 내용의 상품명입니다. 대충 영역 넘으면 말줄임 처리 할 거에요. 토스 간편결제 API어케 연동하노',
            price : 7000000,
            count : 25,
            country : 'FRANCE'
        },
        {
            num : 202311111456,
            img : '../../logo.png',
            name : '엄청 긴 내용의 상품명입니다. 대충 영역 넘으면 말줄임 처리 할 거에요. 토스 간편결제 API어케 연동하노',
            price : 7000000,
            count : 25,
            country : 'FRANCE'
        },
        {
            num : 202311111457,
            img : '../../logo.png',
            name : '엄청 긴 내용의 상품명입니다. 대충 영역 넘으면 말줄임 처리 할 거에요. 토스 간편결제 API어케 연동하노',
            price : 7000000,
            count : 25,
            country : 'FRANCE'
        }
    ];


    const productPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPageCount = Math.ceil(openProduct.length / productPerPage);

    const startNo = (currentPage -1) * productPerPage;
    const endNo = startNo + productPerPage;
    const currentData = openProduct.slice(startNo, endNo);

    const handlePageChange = (page) => {
        if(page >= 1 && page <= totalPageCount){
            setCurrentPage(page);
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

    return(
      <div className="open-market">
        <div className="open-market-header">
            <div className="open-market-header-title">
                <p>오픈마켓</p>
            </div>
            <div className="open-market-header-logo">
                <a href="/">
                <img src="../../logo0.png" alt="open-market-logo"/>
                </a>
            </div>
            <div className="open-market-header-member">
                <p><span>YAMAHA</span> 님 안녕하세요. 좋은 하루 되세요!</p>
            </div>
        </div>

        <div className="open-market-content">
            <div className="open-market-create">
                <Link to="/openMarket/goodsControl">
                <button>상품등록</button>
                </Link>
            </div>
            <div className="open-market-content-header">
                <div className="open-market-content-header-no">
                    <p>NO</p></div>
                <div className="open-market-content-header-num">
                    <p>상품번호</p>
                </div>
                <div className="open-market-content-header-img">
                    <p>상품이미지</p>
                </div>
                <div className="open-market-content-header-name">
                    <p>상품명</p>
                </div>
                <div className="open-market-content-header-price">
                    <p>가격</p>
                </div>
                <div className="open-market-content-header-count">
                    <p>재고</p>
                </div>
                <div className="open-market-content-header-country">
                    <p>원산지</p>
                </div>
                <div className="open-market-content-header-modify">
                    <p>상품수정</p>
                </div>
                <div className="open-market-content-header-delete">
                    <p>상품삭제</p>
                </div>
            </div>
            {currentData.map((product, index) =>(
            <div className="open-market-content-list">
                    <div className="open-market-content-list-no">
                        <p>{index}</p>
                    </div>
                    <div className="open-market-content-list-num">
                        <p>{product.num}</p>
                    </div>
                    <div className="open-market-content-list-img">
                        <img src={product.img} alt = {index} />
                    </div>
                    <div className="open-market-content-list-name">
                        <p>{product.name}</p>
                    </div>
                    <div className="open-market-content-list-price">
                        <p>{product.price.toLocaleString()}</p>
                    </div>
                    <div className="open-market-content-list-count">
                        <p>{product.count}</p>
                    </div>
                    <div className="open-market-content-list-country">
                        <p>{product.country}</p>
                    </div>
                    <div className="open-market-content-list-modify">
                        <a href="/openMarket/goodsControll">
                            <button>✎</button>
                        </a>
                    </div>
                    <div className="open-market-content-list-delete">
                        <button>✖</button>
                    </div>
            </div>
            ))};
        </div>
          <div className="page-navi">
              {showPreviousButton && (<button onClick={() => handlePageChange(currentPage - 1)}
                                             className="product-list-prev">
                      《
                  </button>
              )}
              <span style={{margin: '15px', color : "#AAAAAA"}}>{renderPageNumbers()}</span>
              {showNextButton && (<button onClick={() => handlePageChange(currentPage + 1)}
                                          className="product-list-next">
                      》
                  </button>
              )}
          </div>
      </div>
    );
}

export default GoodsAdmin;