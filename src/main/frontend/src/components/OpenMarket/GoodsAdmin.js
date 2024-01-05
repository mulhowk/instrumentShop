import React, {useEffect, useState} from "react";
import "../../styles/OpenMarket/GoodsAdmin.css"
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function GoodsAdmin(){

    const params = useParams();
    const brand = params.brand;

    const [openProduct, setOpenProduct] = useState([]);

    useEffect(() => {
        axios.get(`/goodsList/openMarket/${brand}`)
            .then(response => {
                setOpenProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDeleteGoods = (key) => {

        const isConfirmed = window.confirm('상품을 삭제하시겠습니까?');
        {console.log(key)}

        if(isConfirmed){
        axios.delete(`/openMarket/delete/${key}`)
            .then(res => {
                alert("상품이 삭제되었습니다!");
                window.location.reload();
            })
            .catch(error => console.error('Error delete goods: ', error));
        }
    }

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
                <img src="../../violin.png" alt="open-market-logo"/>
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
                    <p>NO</p>
                </div>
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
                        <p>{product.goodsId}</p>
                    </div>
                    <div className="open-market-content-list-img">
                        <img src={product.goodsImg} alt = {product.goodsId} />
                    </div>
                    <div className="open-market-content-list-name">
                        <p>{product.goodsName}</p>
                    </div>
                    <div className="open-market-content-list-price">
                        <p>{product.goodsPrice.toLocaleString()}</p>
                    </div>
                    <div className="open-market-content-list-count">
                        <p>{product.goodsQuantity}</p>
                    </div>
                    <div className="open-market-content-list-country">
                        <p>{product.goodsCountry}</p>
                    </div>
                    <div className="open-market-content-list-modify">
                        <a href={`/openMarket/goodsControl/${product.goodsId}`}>
                            <button>✎</button>
                        </a>
                    </div>
                    <div className="open-market-content-list-delete">
                        <button key={product.goodsId} onClick={() => handleDeleteGoods(product.goodsId)}>✖</button>
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