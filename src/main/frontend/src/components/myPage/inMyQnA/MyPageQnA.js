import './myPageQnA.css';

const MyPageQnA = () => {
    return (
    <>
        <div className="mypage-qna">
            <div className="my-qna-header">
                <div>
                    <span>문의하기</span>
                </div>
            </div>
            <div className='my-qna-title'>
                <h1>상품이름</h1>
            </div>
            <div class="form-grid">
                <div className='form-grid-tab'>
                    <span>문의 제목 </span>
                    <input type="text" className='qna-title'></input>
                </div>
                <div className='form-grid-tab'>
                    <span>문의 내용 </span>
                    <textarea type="text" className='qna-content'></textarea>
                </div>
                <div className='form-grid-tab-i'>
                    <div className="div-hptjmmcb">
                        <div className="link">
                            <div className="text-wrapper-3">사진/동영상 첨부하기</div>
                        </div>
                    </div>
                </div>
                <div className='form-grid-tab'>
                    <div className='btnQnA'>문의하기</div>
                </div>
            </div>
        </div>
    </>
    );
}

export default MyPageQnA;