import "../../../styles/myInfo/buyList/buyListContent.css"
import { useState,useEffect  } from "react";
import MyWishList from "./MyWishList";


function MyWishInfo() {

    return (
        
        <>
            <div className="myInfo-content-tab">
                <div className="m-c-group">
                    <div className="m-c-g-tab">
                        <div className="m-c-g-t-header">
                            <p>구매 내역</p>
                        </div>
                        <div className="m-c-g-t-wish-content">
                            {/* 구매내역 */}
                            <MyWishList/>
                        </div>                        
                    </div>
                    <div className="null-space" />
                </div>
            </div>
        </>
    );
}

export default MyWishInfo;