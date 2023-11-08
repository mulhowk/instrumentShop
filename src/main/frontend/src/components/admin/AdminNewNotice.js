import './adminNewNotice.css'

const AdminNewNotice = () => {
    return(
        <>
            <div className="admin-notice-component">
                <div className="a-n-c-header">
                    <div className='a-n-c-header-font'>
                    <span>신규현황</span>
                    </div>
                </div>
                <div className="a-n-c-content">
                    <div className="a-n-c-field">
                        <span>신규주문 3</span>
                    </div>
                    <div className="a-n-c-field">
                        <span>신규리뷰 2</span>
                    </div>
                    <div className="a-n-c-field">
                        <span>신규문의 5</span>
                    </div>
                    <div className="a-n-c-field">
                        <span>반품요청 3</span>
                    </div>
                    <div className="a-n-c-field">
                        <span>환불요청 0</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminNewNotice;