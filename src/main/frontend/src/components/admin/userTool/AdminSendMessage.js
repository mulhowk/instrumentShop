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
                            <div className='a-s-m-c-tab-tag'>
                                <div className='a-s-m-tab-message'>
                                    <span>메시지 보내기</span>
                                </div>
                                <div className='a-s-m-tab-sms'>
                                    <span>SMS 보내기</span>
                                </div>
                            </div>    
                        <div className='a-s-m-c-message-board'>
                            <div className='m-b-dropdown'>
                                <div className='m-b-span'>메시지를 보낼 대상</div>
                                {/* 드롭다운 */}
                                <AdminDropDown/>
                            </div>
                            <div className='m-b-title'>
                                <div className='m-b-span'>메시지 제목</div>
                                <div className='m-b-input'>
                                    <input type='text'/>
                                </div>
                            </div>
                            <div className='m-b-content-area'>
                                <div className='m-b-span'>메시지 내용</div>
                                <div className='m-b-textarea'>
                                    <textarea/>
                                </div>
                            </div>
                            <div className='m-b-img'>
                                <button className='m-b-img-insert'>
                                    사진 첨부하기
                                </button>
                            </div>
                        </div>
                        <div className='m-b-btn'>
                            <div className='m-b-btn-field'>
                                <button>보내기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminSendMessage;