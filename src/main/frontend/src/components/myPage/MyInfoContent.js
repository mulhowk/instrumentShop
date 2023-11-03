import "../../styles/myInfo/myInfoContent.css"
import cUser from "../../img/register/c-user.svg"
import cPhone from "../../img/register/c-phone.svg"
import cEmail from "../../img/register/c-email.svg"
import MyPageAddress from "./MyPageAddress";


function MyInfoContent() {
    return (
        <>
            <div className="myInfo-content-tab">
                <div className="m-c-group">
                    <div className="m-c-g-tab">
                        <div className="m-c-g-t-header">
                            <p>프로필</p>
                        </div>
                        <div className="m-c-g-t-content">
                            <div className="m-c-g-t-c-tab"
                                style={{backgroundImage: `url(${cUser})`, 
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '20px',
                                backgroundSize: '20px'
                            }}>
                                <span className="t-span">함형우</span>
                            </div>
                            <hr className="t-hr" />
                            <div className="m-c-g-t-c-tab"
                                style={{backgroundImage: `url(${cPhone})`, 
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '20px',
                                backgroundSize: '20px'
                            }}>
                                <span className="t-span">01023447239</span>
                            </div>
                            <hr className="t-hr" />
                            <div className="m-c-g-t-c-tab"
                                style={{backgroundImage: `url(${cEmail})`, 
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '20px',
                                backgroundSize: '20px'
                            }}>
                                <span className="t-span">nelap1234@gmaiki.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="null-space" />
                    <div className="m-c-g-tab">
                        <div className="m-c-g-t-header">
                            <p>주소지 관리</p>
                        </div>
                        <div className="m-c-g-t-content">
                            <div className="m-c-g-t-c-tab"
                                    style={{backgroundImage: `url(${cUser})`, 
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '20px',
                                    backgroundSize: '20px'
                                }}>
                                <span className="t-span">기본 배송지 설정</span>
                                <button className="delete-button"
                                    style={{ left:'470px',
                                             position: 'relative'
                                    }}>추가</button>
                            </div>
                            <hr className="t-hr" />
                            <div className="m-c-g-t-address">
                                <MyPageAddress/>
                            </div>
                        </div>                        
                    </div>
                    <div className="null-space" />
                    <div className="m-c-g-tab">
                        <div className="m-c-g-t-header">
                            <p>수신 동의</p>
                        </div>
                        <div className="m-c-g-t-content">
                        <div className="m-c-g-t-sns">
                                <span className="t-sms">SMS 수신 동의 </span>
                                <span className="t-email">이메일 수신 동의</span>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyInfoContent;