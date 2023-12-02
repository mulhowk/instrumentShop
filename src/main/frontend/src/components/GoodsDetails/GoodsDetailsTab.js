import React, {useEffect, useRef, useState} from 'react';
import '../../styles/GoodsDetails/GoodsDetailsTab.css'
import {Link} from "react-router-dom";
import axios from "axios";


function GoodsDetailsTab(props){

    const review = props.review;
    const qna = props.qna;
    const goods = props.goods;
    const qnaReply = props.qnaReply;

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

    const productReviewLength = (review && review.length) || 0;

    const reviewPerPage = 5;
    const [currentReviewPage, setCurrentReviewPage] = useState(1);
    const totalReviewPageCount
        = Math.ceil( productReviewLength / reviewPerPage);

    const startReviewIndex = (currentReviewPage -1) * reviewPerPage;
    const endReviewIndex = startReviewIndex + reviewPerPage;
    const currentReviewData = (review &&
        review.slice(startReviewIndex, endReviewIndex)) || null;

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
    const productQnaLength = (qna && qna.length) || 0;
    const [currentQnaPage, setCurrentQnaPage] = useState(1);
    const totalQnaPageCount
        = Math.ceil( productQnaLength/ qnaPerPage);

    const startQnaIndex = (currentQnaPage -1) * qnaPerPage;
    const endQnaIndex = startQnaIndex + qnaPerPage;
    const currentQnaData = (qna && qna.slice(startQnaIndex, endQnaIndex)) || null;
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

    const [openStates, setOpenStates] = useState({});

    const handleQnaClick = (key) => {
        setOpenStates((prevOpenStates) => ({
            ...prevOpenStates,
                [key]: !prevOpenStates[key]
        }));
    };

    return(
        <div className="product-tab">
            <div className="product-tab-detailInfo" ref = {divRefDetailInfo} tabIndex={0}>
                <button onClick={handleButtonClickDetailInfo}
                        style={{backgroundColor : "white", color : "black"}}>상품상세정보</button>
                <button onClick={handleButtonClickPayInfo}>상품구매안내</button>
                <button onClick={handleButtonClickReview}>리뷰({review.length})</button>
                <button onClick={handleButtonClickQna}>Q&A({qna.length})</button>
            </div>
            <div className="product-tab-detail">
                <p>{goods.goodsDetail}</p>
                <img src = {goods.goodsDetailImg} alt = {goods.goodsId}/>
            </div>
            <div className="product-tab-payInfo" ref = {divRefPayInfo} tabIndex={0}>
                <button onClick={handleButtonClickDetailInfo}>상품상세정보</button>
                <button onClick={handleButtonClickPayInfo}
                        style={{backgroundColor : "white", color : "black"}}>상품구매안내</button>
                <button onClick={handleButtonClickReview}>리뷰({review.length})</button>
                <button onClick={handleButtonClickQna}>Q&A({qna.length})</button>
            </div>
            <div className="product-tab-pay">
                <img src={goods.goodsPayinfo} alt={goods.goodsId}/>
            </div>
            <div className="product-tab-review" ref = {divRefReview} tabIndex={0}>
                <button onClick={handleButtonClickDetailInfo}>상품상세정보</button>
                <button onClick={handleButtonClickPayInfo}>상품구매안내</button>
                <button onClick={handleButtonClickReview}
                        style={{backgroundColor : "white", color : "black"}}>
                    리뷰({review.length})
                </button>
                <button onClick={handleButtonClickQna}>Q&A({qna.length})</button>
            </div>
            <div className="product-tab-review-content">
                <div className="product-tab-review-title">
                    <p style={{color : "white"}}>Review</p>
                </div>
                {currentReviewData.length !== 0 ?(
                    <div>
                {currentReviewData.map((res, index) => (
                <div className="product-tab-review-contents">
                    <div className="product-tab-review-content-writer">
                        <p>{res.reviewWriter}</p>
                    </div>
                    <div className="flex-contents">
                        <div className="product-tab-review-content-score">
                        {res.reviewScore === 5 ?
                            <img src = '../../GoodsDetails/GoodsDetailsTab/star5.png'
                            alt = 'star5'/> :
                            res.reviewScore === 4.5 ?
                                <img src = '../../GoodsDetails/GoodsDetailsTab/star4.5.png'
                                     alt = 'star4.5'/>:
                                res.reviewScore === 4 ?
                                    <img src = '../../GoodsDetails/GoodsDetailsTab/star4.png'
                                         alt = 'star4'/>:
                                    res.reviewScore === 3.5 ?
                                        <img src = '../../GoodsDetails/GoodsDetailsTab/star3.5.png'
                                             alt = 'star3.5'/>:
                                        res.reviewScore === 3 ?
                                            <img src = '../../GoodsDetails/GoodsDetailsTab/star3.png'
                                                 alt = 'star3'/>:
                                            res.reviewScore === 2.5 ?
                                                <img src = '../../GoodsDetails/GoodsDetailsTab/star2.5.png'
                                                     alt = 'star2.5'/>:
                                                res.reviewScore === 2 ?
                                                    <img src = '../../GoodsDetails/GoodsDetailsTab/star2.png'
                                                         alt = 'star2'/>:
                                                    res.reviewScore === 1.5 ?
                                                        <img src = '../../GoodsDetails/GoodsDetailsTab/star1.5.png'
                                                             alt = 'star1.5'/>:
                                                        res.reviewScore === 1 ?
                                                            <img src = '../../GoodsDetails/GoodsDetailsTab/star1.png'
                                                                 alt = 'star1'/>:
                                                                <img src = '../../GoodsDetails/GoodsDetailsTab/star0.5.png'
                                                                     alt = 'star0.5'/>
                        }
                        </div>
                        <div className="product-tab-review-content-date">
                            <p>{res.reviewDate}</p>
                        </div>
                    </div>
                    <div className="product-tab-review-content-id">
                        <p>{goods.goodsName}</p>
                    </div>
                    {res.reviewFile &&
                        <div className="product-tab-review-content-img">
                        <img src={res.reviewFile} alt="review-file"/>
                    </div>
                    }
                    <div className="product-tab-review-content-title">
                        <p>{res.reviewTitle}</p>
                    </div>
                    <div className="product-tab-review-content-content">
                        <p>{res.reviewContent}</p>
                    </div>
                </div>
                    ))}
                    </div>
                    )
               : (
                <div className="not-review">
                    <p>리뷰가 존재하지 않습니다.</p>
                </div>
                    )
                }
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
                      <Link to={`/goodsDetails/reviewWrite/${goods.goodsId}`}>
                        <button>WRITE</button>
                      </Link>
                    </div>
                </div>

            </div>
            <div className="product-tab-qna" ref = {divRefQna} tabIndex={0}>
                <button onClick={handleButtonClickDetailInfo}>상품상세정보</button>
                <button onClick={handleButtonClickPayInfo}>상품구매안내</button>
                <button onClick={handleButtonClickReview}>
                    리뷰({review.length})
                </button>
                <button onClick={handleButtonClickQna}
                        style={{backgroundColor : "white", color : "black"}}>
                    Q&A({qna.length})</button>
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
                    <div className="product-tab-qna-header-status">
                        <p>답변상태</p>
                    </div>
                </div>
                {currentQnaData.length !== 0 ?(
                    <div>
                {currentQnaData.map((qna, index) => (
                    <div>
                        <div className="product-tab-qna-contents" key={index}
                        onClick={() => handleQnaClick(index)}>
                            <div className="product-tab-qna-content-no">
                                <p>{startReviewIndex + index}</p>
                            </div>
                            <div className="product-tab-qna-content-subject">
                                <p>{qna.qnaTitle}</p>
                            </div>
                            <div className="product-tab-qna-content-name">
                                <p>{qna.qnaWriter}</p>
                            </div>
                            <div className="product-tab-qna-content-date">
                                <p>{qna.qnaDate}</p>
                            </div>
                            <div className="product-tab-qna-content-status">
                                <p>{qnaReply.length === 0 ? "답변중" : "답변완료"}</p>
                            </div>
                        </div>
                        {openStates[index] &&
                            <div>
                                <div className="product-tab-qna-contents-detail">
                                    <div className="product-tab-qna-contents-detail-blank">
                                    </div>
                                    <div className="product-tab-qna-contents-detail-content">
                                        <p>{qna.qnaContent}</p>
                                    </div>
                                </div>
                                {qnaReply.length !==0?
                                (
                                <div className="product-tab-qna-contents-detail2">
                                    <div className="product-tab-qna-contents-detail-blank">
                                    </div>
                                    <div className="product-tab-qna-contents-detail-reply">
                                        <p style={{color : "skyblue"}} className="reply-title">
                                            (?) 상품 담당자 답변</p>
                                        <p>{qnaReply[index].replyContent}</p>
                                    </div>
                                    <div className="product-tab-qna-contents-detail-date">
                                        <p>{qnaReply[index].replyDate}</p>
                                    </div>
                                </div>) : ("")}
                            </div>

                        }
                    </div>
                ))}
                    </div>): (
                    <div className="not-qna">
                        <p>QnA가 없습니다.</p>
                    </div>)
            }
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
                        <Link to={`/goodsDetails/qnaWrite/${goods.goodsId}`}>
                        <button>WRITE</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default GoodsDetailsTab;