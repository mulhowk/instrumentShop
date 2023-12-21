import './myPageQnA.css';
import React, {useEffect, useRef, useState} from "react";
import {getAuthToken, tokenUserInfo} from "../../../global/auth";

const MyPageQnA = ({goods, onQnaDataChange}) => {

    const token =  getAuthToken();
    const decodedToken = tokenUserInfo(token);
    const writer = decodedToken? decodedToken.name : null;

    const [qnaTitle, setQnaTitle] = useState();
    const [qnaContent, setQnaContent] = useState();
    const [qnaFile, setQnaFile] = useState(null);
    const [qnaWriter, setQnaWriter] = useState();

    useEffect(() => {
        setQnaWriter(writer)
    }, []);

    const handleTitleChange = (e) => {
        setQnaTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setQnaContent(e.target.value);
    }

    const fileInputRef = useRef();
    const textInputRef = useRef();
    const handleFileChange = () => {
        const fileInput = fileInputRef.current;
        const textInput = textInputRef.current;
        const selectedFile = fileInput.files[0];

        setQnaFile(selectedFile);

        if(selectedFile) {
            textInput.value = selectedFile.name;
        }else {
            textInput.value = '';
        }
    };

    useEffect(() => {

        const qnaData = {qnaWriter, qnaTitle, qnaFile, qnaContent}

        onQnaDataChange(qnaData);

    }, [qnaContent, qnaWriter, qnaFile, qnaTitle]);

    return (
    <>
        <div className="mypage-qna">
            <div className="my-qna-header">
                <div>
                    <span>문의하기</span>
                </div>
            </div>
            <div className="my-qna-title">
                <h2>{goods.goodsName}</h2>
                <img src = {goods.goodsImg} alt={goods.goodsId} style={{width : "200px", height : "200px"}}/>
            </div>
            <div className="form-grid">
                <div className='form-grid-tab'>
                    <span>문의 제목 </span>
                    <input type="text" className="qna-title-area"
                    placeholder="문의 제목을 작성해주세요."
                    value={qnaTitle}
                    onChange = {handleTitleChange}/>
                </div>
                <div className='form-grid-tab'>
                    <span>문의 내용 </span>
                    <textarea type="text" className="qna-content-area"
                    placeholder="문의 내용을 작성해주세요."
                    value={qnaContent}
                    onChange={handleContentChange}/>
                </div>
                <div className='form-grid-tab-i'>
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
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default MyPageQnA;