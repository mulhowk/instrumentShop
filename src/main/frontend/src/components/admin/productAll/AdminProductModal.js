import '../userTool/adminUserModal.css';
const AdminProductModal = ({ goods, onClose }) => {

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="header-name">제품정보</span>
                        <span className="close" onClick={onClose}>&times;</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminProductModal;