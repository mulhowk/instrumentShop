import './adminUserModal.css';
import axios from "axios";
import {useEffect, useState} from "react";

const AdminUserModal = ({ user, onClose }) => {
    const [reservesToAdd, setReservesToAdd] = useState(0);
    const [orders, setOrders] = useState(null);
    const [loading, setLoading] = useState(true); // 로딩 상태

    useEffect(() => {
        axios.get(`/orders/${user.memberUid}`)
            .then(response => {
                setOrders(response.data); // 받아온 데이터로 상태 업데이트
                setLoading(false); // 로딩 상태 업데이트
            })
            .catch(error => {
                setLoading(false); // 에러 발생 시에도 로딩 상태 업데이트
                alert(error.message);
            });
    }, [user.memberUid]); // user.memberUid가 변경될 때마다 효과 실행

    const handleAddReserves = () => {
        const reserves = parseInt(reservesToAdd, 10);

        if (!isNaN(reserves) && reserves > 0) {
            axios.put(`/api/user/reservesAdd/${user.memberUid}`, { memberReserves : reserves })
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

    const updateUserRole = () => {
        const roleSelect = document.getElementById("roleSelect");
        const selectedRole = roleSelect.value;

        axios.post(`/api/user/upsetRole?memberUid=${user.memberUid}&role=${selectedRole}`)
            .then(response => {
                alert('권한이 성공적으로 변경되었습니다.');
                onClose(); // 여기서 상태를 업데이트하거나 모달을 닫을 수 있습니다.
            })
            .catch(error => {
                alert('권한 변경 중 오류가 발생했습니다: ' + error.message);
            });
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
                            <div className="member-role-upset">
                                <select className="member-role-select" id="roleSelect">
                                    <option value="USER">일반회원</option>
                                    <option value="ADMIN">관리자</option>
                                    <option value="MAKETER">마케터</option>
                                </select>
                                <button className="edit-button" onClick={updateUserRole}>권한변경</button>
                            </div>
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
                        <div className="modal-body-right">
                            <h2>주문내역</h2>
                            <div>
                                {loading ? (
                                    <div>Loading...</div>
                                ) : !orders || orders.length === 0 ? (
                                    <div>주문내역이 없습니다.</div>
                                ) : (
                                    <div className="modal-order-info">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>주문 ID</th>
                                                <th>주문 날짜</th>
                                                <th>주문 가격</th>
                                                <th>결제 방식</th>
                                                <th>상품 ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {orders.map((order) => (
                                                <tr key={order.orderId}>
                                                    <td>{order.orderId}</td>
                                                    <td>{order.orderDate}</td>
                                                    <td>{order.totalPrice}</td>
                                                    <td>{order.paymentInformation}</td>
                                                    <td>
                                                        {order.goodsId.map((id, index) => (
                                                            <span
                                                                key={id}>{id}{index < order.goodsId.length - 1 ? ', ' : ''}</span>
                                                        ))}
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
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