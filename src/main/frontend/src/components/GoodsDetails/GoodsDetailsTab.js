import React, {useRef, useState} from 'react';
import '../../styles/GoodsDetails/GoodsDetailsTab.css'
import {Link} from "react-router-dom";


function GoodsDetailsTab(props){

    const divRefDetailInfo = useRef(null);
    const divRefPayInfo = useRef(null);
    const divRefReview = useRef(null);
    const divRefQna = useRef(null);

    const handleButtonClickDetailInfo = () => {
        if (divRefDetailInfo.current) {
            divRefDetailInfo.current.focus();
        }
    };

    const handleButtonClickPayInfo = () => {
        if (divRefPayInfo.current) {
            divRefPayInfo.current.focus();
        }
    };

    const handleButtonClickReview = () => {
        if (divRefReview.current) {
            divRefReview.current.focus();
        }
    };

    const handleButtonClickQna = () => {
        if (divRefQna.current) {
            divRefQna.current.focus();
        }
    };

    const reviewPerPage = 10;
    const [currentReviewPage, setCurrentReviewPage] = useState(1);
    const totalReviewPageCount
        = Math.ceil(props.product.review.length / reviewPerPage);

    const startReviewIndex = (currentReviewPage -1) * reviewPerPage;
    const endReviewIndex = startReviewIndex + reviewPerPage;
    const currentReviewData = props.product.review.slice(startReviewIndex, endReviewIndex);

    const handleReviewPageChange = (newPage) => {
        if(newPage >= 1 && newPage <= totalReviewPageCount){
            setCurrentReviewPage(newPage);
        }
    };

    const renderReviewPageNumbers = () => {
        const pageReviewNumbers = [];
        for (let i = 1; i <= totalReviewPageCount; i++){
            pageReviewNumbers.push(
                <span
                    key={i}
                    className={i === currentReviewPage ? 'active' : ''}
                    onClick={() => handleReviewPageChange(i)}
                    style={{margin : '10px'}}
                >
                    {i}
                </span>
            );
        }
        return pageReviewNumbers;
    };

    const showReviewPreviouButton = currentReviewPage > 1 ;
    const showReviewNextButton = currentReviewPage < totalReviewPageCount;

    const qnaPerPage = 10;
    const [currentQnaPage, setCurrentQnaPage] = useState(1);
    const totalQnaPageCount
        = Math.ceil(props.product.qna.length / qnaPerPage);

    const startQnaIndex = (currentQnaPage -1) * qnaPerPage + 1;
    const endQnaIndex = startQnaIndex + qnaPerPage;
    const currentQnaData = props.product.qna.slice(startQnaIndex, endQnaIndex);

    const handleQnaPageChange = (newPage) => {
        if(newPage >= 1 && newPage <= totalQnaPageCount){
            setCurrentQnaPage(newPage);
        }
    };

    const renderQnaPageNumbers = () => {
        const pageQnaNumbers = [];
        for (let i = 1; i <= totalQnaPageCount; i++){
            pageQnaNumbers.push(
                <span
                    key={i}
                    className={i === currentQnaPage ? 'active' : ''}
                    onClick={() => handleQnaPageChange(i)}
                    style={{margin : '10px'}}
                >
                    {i}
                </span>
            );
        }
        return pageQnaNumbers;
    };

    const showQnaPreviouButton = currentQnaPage > 1 ;
    const showQnaNextButton = currentQnaPage < totalQnaPageCount;


    return(
        <div className="product-tab">
            <div className="product-tab-detailInfo" ref = {divRefDetailInfo} tabIndex={0}>
                <button onClick={handleButtonClickDetailInfo}
                        style={{backgroundColor : "white", color : "black"}}>상품상세정보</button>
                <button onClick={handleButtonClickPayInfo}>상품구매안내</button>
                <button onClick={handleButtonClickReview}>리뷰({props.product.review.length})</button>
                <button onClick={handleButtonClickQna}>Q&A({props.product.qna.length})</button>
            </div>
            <div className="product-tab-detail">
                <p>{props.product.details}</p>
            </div>
            <div className="product-tab-payInfo" ref = {divRefPayInfo} tabIndex={0}>
                <button onClick={handleButtonClickDetailInfo}>상품상세정보</button>
                <button onClick={handleButtonClickPayInfo}
                        style={{backgroundColor : "white", color : "black"}}>상품구매안내</button>
                <button onClick={handleButtonClickReview}>리뷰({props.product.review.length})</button>
                <button onClick={handleButtonClickQna}>Q&A({props.product.qna.length})</button>
            </div>
            <div className="product-tab-pay">
                <p>{props.product.payInfo}</p>
            </div>
            <div className="product-tab-review" ref = {divRefReview} tabIndex={0}>
                <button onClick={handleButtonClickDetailInfo}>상품상세정보</button>
                <button onClick={handleButtonClickPayInfo}>상품구매안내</button>
                <button onClick={handleButtonClickReview}
                        style={{backgroundColor : "white", color : "black"}}>
                    리뷰({props.product.review.length})
                </button>
                <button onClick={handleButtonClickQna}>Q&A({props.product.qna.length})</button>
            </div>
            <div className="product-tab-review-content">
                <div className="product-tab-review-title">
                    <p style={{color : "white"}}>Review</p>
                </div>
                <div className="product-tab-review-header">
                    <div className="product-tab-review-header-no">
                        <p>NO</p>
                    </div>
                 <div className="product-tab-review-header-subject">
                     <p>내용</p>
                 </div>
                 <div className="product-tab-review-header-score">
                     <p>별점</p>
                 </div>
                 <div className="product-tab-review-header-name">
                    <p>이름</p>
                </div>
                 <div className="product-tab-review-header-date">
                     <p>등록일</p>
                 </div>
                </div>
                {currentReviewData.map((res, index) => (
                <div className="product-tab-review-contents">
                    <div className="product-tab-review-content-no">
                        <p>{startReviewIndex + index}</p>
                    </div>
                    <div className="product-tab-review-content-subject">
                        <p>{res.subject}</p>
                    </div>
                    <div className="product-tab-review-content-score">
                        <p>{res.point}</p>
                        {console.log(res.point)}
                    </div>
                    <div className="product-tab-review-content-name">
                        <p>{res.name}</p>
                    </div>
                    <div className="product-tab-review-content-date">
                        <p>{res.date}</p>
                    </div>
                </div>
                    ))}
                <div className="review-page-nav">
                  <div className="review-page-button">
                    {showReviewPreviouButton && (
                        <button onClick={() => handleReviewPageChange(currentReviewPage - 1)}
                                                   className="review-page-prev">
                            《
                        </button>
                    )}
                    <span style={{margin: '15px', color : "#AAAAAA"}}>{renderReviewPageNumbers()}</span>
                    {showReviewNextButton && (
                        <button onClick={() => handleReviewPageChange(currentReviewPage + 1)}
                                                className="review-page-next">
                            》
                        </button>
                    )}
                  </div>
                    <div className="review-write">
                      <Link to="/reviewWrite">
                        <button>WRITE</button>
                      </Link>
                    </div>
                </div>

            </div>
            <div className="product-tab-qna" ref = {divRefQna} tabIndex={0}>
                <button onClick={handleButtonClickDetailInfo}>상품상세정보</button>
                <button onClick={handleButtonClickPayInfo}>상품구매안내</button>
                <button onClick={handleButtonClickReview}>
                    리뷰({props.product.review.length})
                </button>
                <button onClick={handleButtonClickQna}
                        style={{backgroundColor : "white", color : "black"}}>
                    Q&A({props.product.qna.length})</button>
            </div>
            <div className="product-tab-qna-content">
                <div className="product-tab-qna-title">
                    <p style={{color : "white"}}>QnA</p>
                </div>
                <div className="product-tab-qna-header">
                    <div className="product-tab-qna-header-no">
                        <p>NO</p>
                    </div>
                    <div className="product-tab-qna-header-subject">
                        <p>내용</p>
                    </div>
                    <div className="product-tab-qna-header-name">
                        <p>이름</p>
                    </div>
                    <div className="product-tab-qna-header-date">
                        <p>등록일</p>
                    </div>
                </div>
                {currentQnaData.map((res, index) => (
                    <div className="product-tab-qna-contents">
                        <div className="product-tab-qna-content-no">
                            <p>{startReviewIndex + index}</p>
                        </div>
                        <div className="product-tab-qna-content-subject">
                            <p>{res.subject}</p>
                        </div>
                        <div className="product-tab-qna-content-name">
                            <p>{res.name}</p>
                        </div>
                        <div className="product-tab-qna-content-date">
                            <p>{res.date}</p>
                        </div>
                    </div>
                ))}
                <div className="qna-page-nav">
                    <div className="qna-page-button">
                    {showQnaPreviouButton && (
                        <button onClick={() => handleQnaPageChange(currentQnaPage - 1)}
                                className="qna-page-prev">
                            《
                        </button>
                    )}
                    <span style={{margin: '15px', color : "#AAAAAA"}}>{renderQnaPageNumbers()}</span>
                    {showQnaNextButton && (
                        <button onClick={() => handleQnaPageChange(currentQnaPage + 1)}
                                className="qna-page-next">
                            》
                        </button>
                    )}
                    </div>
                    <div className="qna-write">
                        <button>WRITE</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GoodsDetailsTab;