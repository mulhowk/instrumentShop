import "../../styles/adminPage/adminMain.css"
import aMain from "../../img/info/main_admin.svg"
import {Link} from "react-router-dom";
function AdminSide() {
  return (
    <>
        <div className="admin-side">
            <div className="a-s-logo">
                <span className="a-s-l-span">로고</span>
            </div>
            <div className="a-s-content">
                <div className="a-s-c-site">
                    <a href="/"><span>사이트 바로가기</span></a>
                </div>
                <div className="a-s-c-tab" 
                style={{backgroundImage: `url(${aMain})`, 
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '10px',
                                backgroundSize: '13px'}}>
                    <a href="/admin"><span>메인화면</span></a>
                </div>
                <div className="a-s-c-tab-user" >
                    <a href="/admin/user"><span style={{backgroundImage: `url(${aMain})`, 
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '0px',
                                backgroundSize: '14px'}}>사용자 관리</span></a>
                    <div className="a-s-c-tab-user-menu">
                        <ul>
                            <a href="/admin/user"><li>사용자 목록</li></a>
                            <a href="/admin/message"><li>메시지 보내기</li></a>
                            <li>매니저 설정</li>
                        </ul>
                    </div>
                </div>
                <div className="a-s-c-tab-shopping">
                    <a href="/admin/goodsAllList"><span style={{backgroundImage: `url(${aMain})`, 
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '0px',
                                backgroundSize: '14px'}}>쇼핑</span></a>
                    <div className="a-s-c-tab-shopping-menu">
                        <ul>
                            <Link to="/admin/goodsAllList"><li>상품 관리</li></Link>
                            <Link to="/admin/productAdd"><li>상품 등록</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="a-s-c-tab-coupon">
                    <a href="/admin/couponAllList"><span style={{backgroundImage: `url(${aMain})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '0px',
                                backgroundSize: '14px'}}>쿠폰</span></a>
                    <div className="a-s-c-tab-shopping-menu">
                        <ul>
                            <Link to="/admin/couponAllList">
                                <li>쿠폰 목록</li>
                            </Link>
                            <Link to="/admin/coupon">
                                <li>쿠폰 등록</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default AdminSide;