function AdminMain() {
  return (
    <>
        <div className="admin-side">
            <div className="a-s-logo">
                로고
            </div>
            <div className="a-s-content">
                <div className="a-s-c-site">
                    사이트 바로가기
                </div>
                <div className="a-s-c-tab">
                    메인화면
                </div>
                <div className="a-s-c-tab-user">
                    사용자 관리
                    <div className="a-s-c-tab-user-menu">
                        <ul>
                            <li>사용자 목록</li>
                            <li>메시지 보내기</li>
                            <li>매니저 설정</li>
                        </ul>
                    </div>
                </div>
                <div className="a-s-c-tab-shopping">
                    쇼핑
                    <div className="a-s-c-tab-shopping-menu">
                        <ul>
                            <li>상품 관리</li>
                            <li>상품 등록</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default AdminMain;