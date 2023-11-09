import './adminUserTool.css';

const AdminUserTool = () => {
    return (
        <>
            <div className="user-tool-component">
                <div className="u-t-header">
                    <div className='u-t-h-font'>분류</div>
                </div>
                <div className="u-t-content">
                    <div className="u-t-c-tab"> 전체사용자 </div>
                    <div className="u-t-c-tab"> 일반사용자 </div>
                    <div className="u-t-c-tab"> 판매자 </div>
                </div>
            </div>
        </>
    );
}

export default AdminUserTool;