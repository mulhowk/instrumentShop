import {Link, useSearchParams} from "react-router-dom";


export function SuccessPage() {
    const [searchParams] = useSearchParams();

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