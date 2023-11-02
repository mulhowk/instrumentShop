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
                        <b className="b3">닉네임</b>                      
                    </div>
                    <div>
                        <br className="p-l-br" />
                            <div className="p-l-i-button">
                                <div className="div12">구매 내역</div>
                            </div>
                            <div className="p-l-i-button">
                                <b className="b2">프로필 설정</b>
                            </div>
                            <div className="p-l-i-button">
                                <div className="div13">찜한 상품</div>
                            </div>
                        <br className="p-l-br" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyInfoSide;