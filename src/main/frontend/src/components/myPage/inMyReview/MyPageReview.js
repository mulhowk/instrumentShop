import './myPageReview.css';

const MyPageReviews = () => {
    return (
        <>
            <div className="mypage-review">
                <div className="mypage-review-content">
                    <div className="strong">
                        <div className="text-wrapper">어떤 점이 좋았나요?</div>
                        </div>
                    <div className="div-s">
                        <div className="label">
                            <textarea className="element" placeholder="한달동안 사용하시면서 달라진 만족도에 대한 후기를 남겨주세요.(최소 10자 이상)" />
                        </div>
                        <div className="div-dhgs">
                        </div>
                    </div>
                    <div className="div-hptjmmcb">
                        <div className="link">
                            <div className="text-wrapper-3">사진/동영상 첨부하기</div>
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