import "../../styles/myInfo/myInfoContent.css"
import cUser from "../../img/register/c-user.svg"
import cPhone from "../../img/register/c-phone.svg"
import cEmail from "../../img/register/c-email.svg"
import MyPageAddress from "./MyPageAddress";
import { useOpenInWindow }  from 'use-open-window';
import React, {useState} from "react";
import AdminUserModal from "../admin/userTool/AdminUserModal";
import MyInfoPhoneModal from "./MyInfoPhoneModal";


function MyInfoContent(prop) {
    const userData = prop.userData;
    const [showModalPhone, setShowModalPhone] = useState(false);

    console.log(userData);
    const url = '/myinfo/address';
    const options = {
      centered: true, /* default */
      specs: {
          width: 550, /* window width */
          height: 400, /* window height */
      }
    };

    const handleClick = () => {
        setShowModalPhone(true);
    };

    const [handleWindowOpen, newWindowHandle] = useOpenInWindow(url, options);

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
                                {userData && <span className="t-span">{userData.member_name}</span>}
                            </div>
                            <hr className="t-hr" />
                            <div className="m-c-g-t-c-tab"
                                 style={{
                                     backgroundImage: `url(${cPhone})`,
                                     backgroundRepeat: 'no-repeat',
                                     backgroundPosition: '20px',
                                     backgroundSize: '20px',
                                     display: 'flex',
                                     justifyContent: 'space-between'
                                 }}>
                                {userData && <span className="t-span">{userData.member_phone}</span>}
                                <button className="delete-button"
                                        style={{
                                            marginLeft: '10px'
                                        }}
                                        onClick={handleClick}
                                >수정
                                </button>
                            </div>
                            <hr className="t-hr"/>
                            <div className="m-c-g-t-c-tab"
                                 style={{
                                     backgroundImage: `url(${cEmail})`,
                                     backgroundRepeat: 'no-repeat',
                                     backgroundPosition: '20px',
                                     backgroundSize: '20px',
                                     display: 'flex',
                                     justifyContent: 'space-between'
                                 }}>
                                {userData && <span className="t-span">{userData.member_email}</span>}
                                <button className="delete-button"
                                        style={{
                                            marginLeft: '15px'
                                        }}
                                        onClick={handleClick}
                                >수정
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="null-space"/>
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
                                    style={{ left:'520px',
                                             position: 'relative'
                                    }}
                                    onClick={handleWindowOpen}
                                    >추가</button>
                                {/* how react-popup page */}
                            </div>
                            <hr className="t-hr" />
                            <div className="m-c-g-t-address">
                                <MyPageAddress userData = {userData} />
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

            {showModalPhone && (
                <MyInfoPhoneModal
                    onClose={() => setShowModalPhone(false)}
                    userData={userData} // userData를 MyInfoPhoneModal 컴포넌트에 전달
                />
            )}
        </>
    );
}

export default MyInfoContent;