import './myPageQnA.css';

const MyPageQnA = () => {
    return (
    <>
        <div className="mypage-qna">
            <div className="my-qna-header">
                <div>
                    <h1>문의하기</h1>
                </div>
            </div>
            <div class="form-grid">
                <div>
                    문의 제목 <textarea type="text"></textarea>
                </div>
                <div>문의 내용 
                    <textarea type="text"></textarea>
                </div>
            </div>
        </div>
    </>
    );
}

export default MyPageQnA;