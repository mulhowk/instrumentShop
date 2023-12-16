import "./adminUserEdit.css"

const AdminUserEdit = () => {


    const reservesHistory = [
        { 
            date: "2021-07-07", 
            description: "사용으로 인한 적립금 사용", 
            type: "차감", 
            points: -300 
        },
        { 
            date: "2021-07-06", 
            description: "사용으로 인한 적립금 사용", 
            type: "차감", 
            points: -300 
        },
        { 
            date: "2021-07-05", 
            description: "사용으로 인한 적립금 사용", 
            type: "차감", 
            points: -300 
        },
        { 
            date: "2021-07-04", 
            description: "사용으로 인한 적립금 사용", 
            type: "차감", 
            points: -300 
        },
        { 
            date: "2021-07-03", 
            description: "사용으로 인한 적립금 사용", 
            type: "차감", 
            points: -300 
        },
        { 
            date: "2021-07-03", 
            description: "사용으로 인한 적립금 사용", 
            type: "차감", 
            points: -500 
        },
        { 
            date: "2021-07-03", 
            description: "사용으로 인한 적립금 사용", 
            type: "차감", 
            points: -800 
        },
        { 
            date: "2021-07-03", 
            description: "사용으로 인한 적립금 사용", 
            type: "차감", 
            points: -300 
        },
        // 여기에 추가적인 데이터 항목들을 포함할 수 있습니다.
    ];

    return (
<>
        <div className="admin-user-edit">
            <div className="admin-user-profile">
                <div className="admin-user-img">
                    <div>
                        <span>여기이미지</span>
                    </div>
                </div>
                <div className="admin-user-info">
                    <div className="admin-user-info-name">
                        <span className="first-tab">이름</span><span>함형우</span>
                    </div>
                    <div className="admin-user-info-email">
                        <span className="first-tab">이메일</span><span>nelap1234@kakao.com</span>
                    </div>
                    <div className="admin-user-info-phone">
                        <span className="first-tab">전화번호</span><span>010-1234-5678</span>
                    </div>
                </div>
            </div>    
            <div className="admin-user-profile-a">
                <div className="admin-user-active">
                    <div className="admin-user-login-data">
                        <span className="first-tab">최근 로그인</span><span>2021-07-07</span>
                    </div>
                    <div className="admin-user-login-data">
                        <span className="first-tab">최근 접속IP</span><span>180.0.0.1</span>
                    </div>
                    <div className="amdin-user-posting-data">
                        <div>
                            <span className="first-tab">구매</span><span> 0 </span>
                        </div>
                        <div>
                            <span className="first-tab">리뷰</span><span> 0 </span>
                        </div>
                        <div>
                            <span className="first-tab">문의</span><span> 0 </span>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="admin-user-profile-h">
                <div className="admin-user-reserves">
                    <div className="admin-user-reserves-hisotry">
                        <div className="reserves-history-add">
                            <table className="reserves-table">
                                <thead>
                                    <tr>
                                        <th>일자</th>
                                        <th>내용</th>
                                        <th>여부</th>
                                        <th>포인트</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {reservesHistory.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.description}</td>
                                        <td>{item.type}</td>
                                        <td>{item.points}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
    );
}

export default AdminUserEdit;