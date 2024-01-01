import './adminUserModal.css';
import axios from "axios";
import {useState} from "react";

const AdminUserModal = ({ user, onClose }) => {
    const [reservesToAdd, setReservesToAdd] = useState('');


    const handleAddReserves = () => {
        const reserves = parseInt(reservesToAdd, 10);


        if (!isNaN(reserves) && reserves > 0) {
            axios.put(`/api/user/reservesAdd/${user.MEMBERUID}`, { memberReserves : reserves })
                .then(response => {
                    alert('적립금이 성공적으로 추가되었습니다.');
                    onClose(); // 모달을 닫거나 상태를 업데이트 할 수 있습니다.
                })
                .catch(error => {
                    alert('적립금 추가 중 오류가 발생했습니다: ' + error.message);
                });
        } else {
            alert('유효한 적립금을 입력해주세요.');
        }
    };

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="header-name">유저정보</span>
                        <span className="close" onClick={onClose}>&times;</span>
                    </div>
                    <div className="modal-body">
                        <div className="modal-body">
                            <h2>{user.memberName}</h2>
                            <p>이메일 : {user.memberEmail}</p>
                            <p>성별 : {user.memberGender}</p>
                            <p>권한 : {user.memberRole}</p>
                            <p>가입일 : {user.memberDate}</p>
                            <p>적립금 : {user.memberReserves}</p>
                            <p>최종로그인 : {user.loginDate}</p>
                        </div>
                        <div className="modal-body-side">
                            <h2>적립금 추가하기</h2>
                            <div className="modal-point-add">
                                <input
                                    className="modal-input"
                                    type="number"
                                    placeholder="적립금을 입력하세요"
                                    value={reservesToAdd}
                                    onChange={e => setReservesToAdd(e.target.value)}
                                ></input>
                            &nbsp;
                            <button className="edit-button" onClick={handleAddReserves}>적립금 추가</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
)
    ;
}

export default AdminUserModal;