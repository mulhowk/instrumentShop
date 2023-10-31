import "../../styles/register/registerForm.css";
import cUser from "../../img/register/c-user.svg"
import cEmail from "../../img/register/c-email.svg"
import cPassword from "../../img/register/c-password.svg"
import cPhone from "../../img/register/c-phone.svg"
import cScroll from "../../img/register/c-scroll.svg"
import cDate from "../../img/register/c-date.svg"
import cMore from "../../img/register/c-more.svg"
import CustomSelect from "./CustomSelect";

function RegisterForm() {
    return (
        <>
          <div className="content-area">
            <div className="c-header">
              <div className="c-r-f-button"> 
                로고
              </div>
            </div>

            <div className="c-r-form">
              <div className="c-r-f-id-information">
                <div className="c-r-f-i-tab-top-round"
                    style={{backgroundImage: `url(${cUser})`, 
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '10px'
                    }}>
                  <input placeholder="이메일"></input>
                </div>
                <div className="c-r-f-i-tab"
                    style={{backgroundImage: `url(${cPassword})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px'
                  }}>
                  <input placeholder="비밀번호"></input>
                </div>
                <div className="c-r-f-i-tab-bottom-round"
                    style={{backgroundImage: `url(${cPassword})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px'
                  }}>
                  <input placeholder="비밀번호 확인"></input>                
                </div>
              </div>
              <div className="c-r-f-user-information">
                <div className="c-r-f-i-tab-top-round"
                    style={{backgroundImage: `url(${cUser})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px'
                  }}>
                  <input placeholder="이름"></input>
                </div>
                <div className="c-r-f-i-tab-bottom-round"
                    style={{backgroundImage: `url(${cDate})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px'
                  }}>                
                  <input placeholder="생년월일"></input>
                </div>  
              </div>
              <div className="c-r-f-phone-information"> 
                <div className="c-r-f-i-tab-top-round"
                    style={{backgroundImage: `url(${cPhone})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px'
                  }}>                
                  <input placeholder="휴대전화"></input>
                </div>
                <div className="c-r-f-i-tab"
                  style={{backgroundImage: `url(${cMore})`, 
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '10px'
                  }}>                   
                  {/* dropdown 컴포넌트 추가 */}
                  <div className="t-selectbox">
                    <CustomSelect/>
                  </div>
                </div>
                <div className="c-r-f-i-tab-bottom-round">
                  <div className="t-button-group">
                    <button className="t-buttom-m">남자</button>
                    <button className="t-buttom-f">여자</button>
                  </div>
                </div>
              </div>
            </div>

            <button className="c-r-f-button">
              인증요청
            </button>
          </div>
        </>
    );
}

export default RegisterForm;