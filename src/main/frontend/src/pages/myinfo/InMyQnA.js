import MyPageQnA from "../../components/myPage/inMyQnA/MyPageQnA";
import React, {useEffect, useState} from "react";
import axios from "axios";

function InMyQnA ({onClose, goodsNum}) {

    const goodsId = goodsNum;
    const [qnaTitle, setQnaTitle] = useState();
    const [qnaContent, setQnaContent] = useState();
    const [qnaWriter, setQnaWriter] = useState();
    const [qnaFile, setQnaFile] = useState();
    const [goods, setGoods] = useState([]);


    useEffect(() => {
        axios.get(`/goodsDetails/goods/${goodsId}`)
            .then(res => {
                setGoods(res.data);
            }).catch(error => {
            console.log('Error fetching data:', error );
        });
    }, []);

    const handleQnaData = (qna) => {

        setQnaWriter(qna.length !==0 ? qna.qnaWriter : null);
        setQnaTitle(qna.length !==0 ? qna.qnaTitle : null);
        setQnaContent(qna.length !==0 ? qna.qnaContent : null);
        setQnaFile(qna.length !==0 ? qna.qnaFile : null);

    }

    const handleQnaCreate = () => {

        const isConfirmed = window.confirm('문의를 작성하시겠습니까?');

        if(isConfirmed) {
            if(!qnaContent) {
                alert('리뷰 내용을 작성해주세요.');
                return;
            }
            if(!qnaTitle) {
                alert('리뷰 제목을 작성해주세요.');
                return;
            }
        } else return;

        const formQnaData = new FormData();

        formQnaData.append('qnaWriter', qnaWriter);
        formQnaData.append('qnaTitle', qnaTitle);
        formQnaData.append('qnaContent', qnaContent);
        if(qnaFile){
            formQnaData.append('qnaFile', qnaFile);
        }
        formQnaData.append('goods', goodsId);

        axios.post(`/goodsDetails/qnaWrite`, formQnaData, {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
            .then(createdReviews => {
                alert('문의가 등록되었습니다!');
                onClose();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error creating review: ', error));
    };

    return (
    <>
        <div style={{display:"flex", alignItems:"center",flexDirection:"column"}}>
            <MyPageQnA goods = {goods} onQnaDataChange = {handleQnaData}/>
        </div>
        <div style={{marginTop : "50px", display : "grid", placeItems : "center"}}>
            <button onClick={handleQnaCreate}
                    style={{
                border: "1px solid #AAAAAA",
                outline: "none",
                marginLeft: "20px",
                backgroundColor : "white",
                color : "black",
                height: "50px",
                width: "100px",
                cursor: "pointer"}}>문의하기</button>
        </div>
    </>
    );
}

export default InMyQnA;