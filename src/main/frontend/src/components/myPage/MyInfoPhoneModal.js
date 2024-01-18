import React from 'react';
import './myInfoPhoneModal.css';
const MyInfoPhoneModal = ({ onClose, userData }) => {
    return (
      <>
          <div className="modal-change">
              <div className="modal-content-change">
                  <div className="modal-header-title">
                      <span>전화번호 등록 / 변경</span>
                  </div>
                  <div className="modal-white-box">
                      <div className="modal-info-myPhone">
                          <div>
                              현재 전화번호
                          </div>
                          <span>{userData.member_phone}</span>
                      </div>
                      <hr className="modal-hr"/>
                      <div className="phone-description">
                          <span>간편로그인의 경우 최초 1회 전화번호을 입력해주세요.</span>
                          <br/>
                      </div>
                      <div className="modal-phone-change-form">
                          <input type="text" className="modal-input" placeholder="전화번호를 입력해주세요."/>
                          &ensp;
                          <button className="delete-button">변경</button>
                      </div>
                  </div>
                  <div className="modal-close-div">
                      <span>닫기</span>
                  </div>
              </div>
          </div>
      </>
    );
}

export default MyInfoPhoneModal;