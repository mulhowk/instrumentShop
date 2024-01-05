import '../../../styles/GoodsDetails/GoodsDetailsTab/QnaReplyWrite.css'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../Header";
import Footer from "../../Footer";


function QnaReplyWrite() {

    const params = useParams();
    const qnaNo = params.qnaNo;
    const goodsId = params.goodsId;
    const [qna, setQna] = useState([]);
    const [replyContent, setReplyContent] = useState(null);
    const navigate = useNavigate();

    const handleCansel = () => {
        navigate(-1);
    }

    const handleCreateReply = () => {

        const isConfirmed = window.confirm('답변을 작성하시겠습니까?');

        if(isConfirmed){
            if(!replyContent){
                alert('댓글을 입력해주세요.');
                return;
            }
        }

        const formQnaData = new FormData();

        formQnaData.append('qna', qnaNo);
        formQnaData.append('goods', goodsId);
        formQnaData.append('replyContent', replyContent);

        axios.post(`/goodsDetails/reply`, formQnaData, {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                alert('답변이 등록되었습니다!');
                navigate(-1);
            })
            .catch(error => console.error('Error creating goods: ', error));
    };

    useEffect(() => {
        axios.get(`/qna/${qnaNo}`)
            .then(response => {
                setQna(response.data);
            })
            .catch(error => {
                console.error('Error fetching data :', error);
            });
    }, []);

    return (
        <>
        <Header/>
        <div className="reply">
            <div className="reply-area">
            <div className="qna-title">
                <p><span style={{fontWeight : "bold", color : "deepskyblue"}}>문의자</span> : {qna.qnaWriter}</p>
            </div>
            <div className="qna-title">
                <p><span style={{fontWeight : "bold", color : "deepskyblue"}}>문의 제목</span> : {qna.qnaTitle}</p>
            </div>
            <div className="qna-content">
                <p><span style={{fontWeight : "bold", color : "deepskyblue"}}>고객의 문의</span> : {qna.qnaContent}</p>
            </div>
            <div className="reply-content">
                <div>
                    <p>답변 작성</p>
                </div>
                <div>
                    <textarea rows="9" placeholder="고객에게 전달할 답변을 적어주세요" value={replyContent || ""}
                              onChange={e => setReplyContent(e.target.value)}/>
                </div>
            </div>
            <div className="submit-button">
                <div className="cansel-button">
                    <button onClick={handleCansel}>취소</button>
                </div>
                <div className="save-button">
                    <button onClick={handleCreateReply}>저장</button>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default QnaReplyWrite;