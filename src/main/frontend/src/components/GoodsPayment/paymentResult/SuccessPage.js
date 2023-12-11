import {Link, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";


export function SuccessPage() {
    const [searchParams] = useSearchParams();
    const [orderInfo, setOrderInfo] = useState([]);
    {console.log(orderInfo)}

    useEffect(() => {
        const orderInfoParams = searchParams.get('orderInfo');
        if(orderInfoParams){
            try{
                const parsedOrderInfo = JSON.parse(decodeURIComponent(orderInfoParams));
                setOrderInfo(parsedOrderInfo);
            } catch (error){
                console.error('Error parsing orderInfo : ', error);
            }
        }
    }, []);


    return(
      <div style={{color : "white", display : "grid", placeContent : "center", marginTop : "200px"}}>
          <h1>결제 성공!</h1>
          <div>
              <div>
                  <p>주문 아이디 : {`${searchParams.get("orderId")}`}</p>
              </div>
              <div>
                  <p>결제 금액 : {`${Number(
                      searchParams.get("amount")
                  ).toLocaleString()}`} 원</p>
              </div>
              <div>
                  <Link to="/">
                  <button className="modal-button">
                      홈페이지로
                  </button>
                  </Link>
              </div>
          </div>
      </div>
    );
}