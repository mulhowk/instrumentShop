import React, {useEffect, useState} from 'react';
import '../userTool/adminUserFilter.css';
import AdminProductFilter from './AdminProductFilter';
import axios from "axios";

const AdminProductAll = () => {
    const [goods, setGoods] = useState();

    useEffect(() => {

        const fetchGoods = async () => {
            try {
                axios.get('/goods')
                    .then(response => {
                        setGoods(response.data);
                    })
            } catch (error) {
                console.error('Failed to fetch goods:', error);

            }
        };

        fetchGoods();
    }, []);


    const productItem = [
        {
            번호: "1",
            이름: "퍼시피카",
            카테고리: "기타>일렉기타",
            판매여부: "2023-10-30",
            등록일: 3000,
            판매금액: 1700000,
            포인트: "2023/10/25",
            판매횟수: 1,
            최근변경일: "2023/10/25"
        }
    ]


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
                <div className="a-u-header" 
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
                                <th>
                                    <input type='checkbox'/>
                                </th>
                                <th>상품번호</th>
                                <th>상품이름</th>
                                <th>카테고리</th>
                                <th>판매여부</th>
                                <th>최초등록일</th>
                                <th>판매금액</th>
                                <th>포인트적립</th>
                                <th>판매횟수</th>
                                <th>변경일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productItem.map((user, index) => (
                            <tr key={index}>
                                <td><input type='checkbox'/></td>
                                <td>{user.번호}</td>
                                <td>{user.이름}</td>
                                <td>{user.카테고리}</td>
                                <td>{user.판매여부}</td>
                                <td>{user.등록일}</td>
                                <td>{user.판매금액}</td>
                                <td>{user.포인트}</td>
                                <td>{user.판매횟수}</td>
                                <td>{user.최근변경일}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default AdminProductAll;