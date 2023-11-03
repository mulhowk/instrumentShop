import "../../styles/myInfo/myInfoSide.css"
import pImage from "../../img/info/info.svg"

function MyInfoSide() {
    return (
        <>
            <div className="myInfo-side-tab">
                <div className="profile-left">
                    <div className="p-l-info">
                        <img className="image-icon" alt="" src={pImage} />
                        <p className="p-l-i-email">nelap1234@gmail.com</p>  
                        <b className="p-l-i-nickName">닉네임</b>                      
                    </div>
                    <div className="p-l-info-content">
                            <div className="p-l-i-button">
                                <div className="p-l-i-tab">프로필 설정</div>
                            </div>
                            <div className="p-l-i-button">
                                <div className="p-l-i-tab">구매 내역</div>
                            </div>
                            <div className="p-l-i-button">
                                <div className="p-l-i-tab">찜한 상품</div>
                            </div>
                        <hr className="p-l-i-hr" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyInfoSide;