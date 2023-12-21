import './myPageReview.css';
import React, {useEffect, useRef, useState} from "react";
import {getAuthToken, tokenUserInfo} from "../../../global/auth";

const MyPageReviews = ({onReviewChange}) => {

    const token =  getAuthToken();
    const decodedToken = tokenUserInfo(token);
    const writer = decodedToken? decodedToken.name : null;

    const [reviewWriter, setReviewWriter] = useState();
    const [reviewContent, setReviewContent] = useState();
    const [reviewFile, setReviewFile] = useState(null);

    useEffect(() => {
        setReviewWriter(writer)
    }, []);

    const handleContentChange = (e) => {
        setReviewContent(e.target.value);
    }

    const fileInputRef = useRef();
    const textInputRef = useRef();
    const handleFileChange = () => {
        const fileInput = fileInputRef.current;
        const textInput = textInputRef.current;
        const selectedFile = fileInput.files[0];

        setReviewFile(selectedFile);

        if(selectedFile) {
            textInput.value = selectedFile.name;
        }else {
            textInput.value = '';
        }
    };

    useEffect(() => {
        const reviewData = {reviewWriter, reviewContent, reviewFile};

        onReviewChange(reviewData);

    }, [reviewContent, reviewFile]);

    return (
        <>
            <div className="mypage-review">
                <div className="mypage-review-content">
                    <div className="strong">
                        <div className="text-wrapper">어떤 점이 좋았나요?</div>
                    </div>
                    <div className="div-s">
                        <div className="label">
                            <textarea className="element"
                                      placeholder="한달동안 사용하시면서 달라진 만족도에 대한 후기를 남겨주세요.(최소 10자 이상)"
                                      value={reviewContent}
                                      onChange={handleContentChange}
                            />
                        </div>
                    </div>
                    <div className="div-hptjmmcb">
                        <div className="link">
                            <div className="text-wrapper-3">
                                <input
                                    className="review-file-input"
                                    type="text"
                                    id="file"
                                    ref={textInputRef}
                                    placeholder="파일을 선택해주세요"
                                    readOnly></input>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    style={{display : "none"}}/>
                                <button
                                    onClick={() => fileInputRef.current.click()}>찾아보기...</button>
                            </div>
                        </div>
                        <div className="p">
                            <p className="text-wrapper-4">
                            상품과 무관한 사진/동영상을 첨부한 리뷰는 통보없이 삭제 및 적립
                            <br />
                            혜택이 회수됩니다.
                            </p>
                        </div>
                    </div>
                    <div className="div-cbggbxc">
                        <div className="text-wrapper-5">사진 또는 동영상 첨부시</div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-6">350원 적립!</div>
                        </div>
                    </div>
                </div>
            </div>
                
    </>
  );
};


export default MyPageReviews;