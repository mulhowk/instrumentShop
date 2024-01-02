import React, {useEffect, useState} from 'react';
import './adminUserFilter.css';
import aMain from '../../../img/info/search_img.png';
import AdminUserModal from './AdminUserModal';
import axios from "axios";

const AdminUserFilter = () => {
    // 데이터를 상태로 설정
    const [userinfo, setUserInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {

        const fetchAllUserInfo = async () => {
            try {
                const response = await axios.get('/api/all/users');
                setUserInfo(response.data);
            } catch (error) {
                console.error("Error fetching addresses: ", error);
            }
        };

        fetchAllUserInfo();
    }, []);

    const handleRowClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    return (
        <>
            <div className="admin-user-filter">
                <div className="a-u-header" 
                style={{backgroundImage: `url(${aMain})`, 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '15px',
                backgroundSize: '25px'}}>
                    <input placeholder='검색'></input>
                    <button className='edit-button'>검색</button>
                </div>
                <div className='header-title'>
                </div>
                <div className="a-u-content">
                    <table className='a-u-table'>
                        <thead>
                            <tr>
                                <th>
                                    <input type='checkbox'/>
                                </th>
                                <th>이름</th>
                                <th>성별</th>
                                <th>이메일</th>
                                <th>회원유형</th>
                                <th>가입날자</th>
                                <th>적립금</th>
                                <th>최종 로그인 일자</th>
                            </tr>
                        </thead>
                        <tbody>
                        {userinfo.map(user => (
                            <tr key={user.memberUid} onClick={() => handleRowClick(user)} >
                                <td><input type='checkbox'/></td>
                                <td>{user.memberName}</td>
                                <td>{user.memberGender}</td>
                                <td>{user.memberEmail}</td>
                                <td>{user.memberRole}</td>
                                <td>{user.memberDate}</td>
                                <td>{user.memberReserves}</td>
                                <td>{user.loginDate}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && selectedUser && (
                <AdminUserModal user={selectedUser} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}

export default AdminUserFilter;