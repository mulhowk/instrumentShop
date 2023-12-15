import "../../../styles/myInfo/buyList/myBuyList.css"
import { createRoot } from 'react-dom/client';
import InMyReview from "../../../pages/myinfo/InMyReview";

const MyBuyList = () => {

    const items = [
        /* item data */
        {
          id: 1,
          price: "700,000 원",
          imageSrc: "7.png",
          description: "SELMER(셀마) Soprano SA80 II JUBILEE AUG Gold Plated"
        },
        {
          id: 2,
          price: "700,000 원",
          imageSrc: "7.png",
          description: "SELMER(셀마) Soprano SA80 II JUBILEE AUG Gold Plated"
        },
        // ... 여기에 추가 상품 데이터를 넣을 수 있습니다.
    ];


    const openPopup = () => {
      const popupWindow = window.open('/pop/reviewAdd', '_blank', 'width=500,height=700');
    };

    const qnaPopup = () => {
      const popupWindow = window.open('/pop/qnaAdd', '_blank', 'width=500,height=700');
    };

    const itemList = items.map((item) => (
        <div className="box" key={item.id}>
          <div className="c-box-user">
            <div className="name-icon">
              <div className="overlap-group">
                <div className="text-wrapper">
                    {item.price}
                </div>
                <div className="div">
                    주문상세 보러가기
                </div>
                <img className="element" alt="Element" src={item.imageSrc} />
                <div className="overlap">
                  <div className="text-wrapper-2" onClick={openPopup}>리뷰쓰기</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-2" onClick={qnaPopup}>문의하기</div>
                </div>
                <span className="p">{item.description}</span>
              </div>
            </div>
          </div>
        </div>
      ));


    return (
        <>{itemList}</>
    );
}

export default MyBuyList;