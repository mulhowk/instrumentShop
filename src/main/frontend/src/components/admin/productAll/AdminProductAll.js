import React, {useEffect, useState} from 'react';
import '../userTool/adminUserFilter.css';
import AdminProductFilter from './AdminProductFilter';
import axios from "axios";
import AdminUserModal from "../userTool/AdminUserModal";
import AdminProductModal from "./AdminProductModal";

const AdminProductAll = () => {
    const [goods, setGoods] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {

        const fetchGoods = async () => {
            try {
                axios.get('/goodsList/all')
                    .then(response => {
                        setGoods(response.data);
                    })
            } catch (error) {
                console.error('Failed to fetch goods:', error);

            }
        };

        fetchGoods();
    }, []);

    const handleRowClick = (goodsTab) => {
        setSelectedUser(goodsTab);
        setShowModal(true);
    };

    return (
        <>
        <div className="user-tool-component">
                        <div className="u-t-header">
                    <div className='u-t-h-font'>쿠폰목록</div>
                </div>
                </div>
                <div style={{width:'50px'}}>

                </div>
            <div className="admin-user-filter">
                <AdminProductFilter/>
                <div className="a-u-header a-u-header-product"
                style={{ 
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
                                <th>상품번호</th>
                                <th>상품이름</th>
                                <th>카테고리</th>
                                <th>판매여부</th>
                                <th>최초등록일</th>
                                <th>판매금액</th>
                                <th>판매횟수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {goods.map((goodsTab) => (
                            <tr key={goodsTab.goodsId} onClick={() => handleRowClick(goodsTab)}>
                                <td>{goodsTab.goodsId}</td>
                                <td>{goodsTab.goodsName}</td>
                                <td>{goodsTab.childCategory}</td>
                                <td>{goodsTab.goodsStatus}</td>
                                <td>{goodsTab.goodsDate}</td>
                                <td>{goodsTab.goodsPrice}</td>
                                <td>{goodsTab.goodsSellcount}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && selectedUser && (
                <AdminProductModal goodsTab={selectedUser} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}

export default AdminProductAll;