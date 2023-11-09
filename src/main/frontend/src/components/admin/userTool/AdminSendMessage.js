import AdminDropDown from './AdminDropDown';
import './adminSendMessage.css'

const AdminSendMessage = () => {
    return (
        <>
            <div className='admin-send-message'>
                <div className='a-s-m-header'>
                    <div className='a-s-m-header-font'>
                        메시지 보내기
                    </div>
                </div>
                <div className='a-s-m-content'>
                    <div className='a-s-m-c-tab'>
                        <div className='a-s-m-tab-message'>
                            <span>메시지 보내기</span>
                        </div>
                        <div className='a-s-m-tab-sms'>
                            <span>SMS 보내기</span>
                        </div>
                        <div className='a-s-m-c-message-board'>
                            <div className='m-b-dropdown'>
                                <span>메시지를 보낼 대상</span>
                                {/* 드롭다운 */}
                                <AdminDropDown/>
                            </div>
                            <div className='m-b-title'>
                                <span>메시지 제목</span>
                                <input type='text'/>
                            </div>
                            <div className='m-b-content'>
                                <span>메시지 내용</span>
                                <textarea/>
                            </div>
                            <div className='m-b-img'>
                                <div className='m-b-img-insert'>
                                    사진 첨부하기
                                </div>
                            </div>
                        </div>
                        <div className='m-b-btn'>
                            <button>보내기</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminSendMessage;