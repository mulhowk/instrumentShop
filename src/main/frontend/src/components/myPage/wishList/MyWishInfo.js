import "../../../styles/myInfo/buyList/buyListContent.css"
import { useState,useEffect  } from "react";
import MyWishList from "./MyWishList";


function MyWishInfo(props) {

    const memberUid = props.MEMBERUID

    return (
        
        <>
            <div className="myInfo-content-tab">
                <div className="m-c-group">
                    <div className="m-c-g-tab">
                        <div className="m-c-g-t-header">
                            <p>좋아요 목록</p>
                        </div>
                        <div className="m-c-g-t-wish-content">
                            {/* 좋아요 */}
                            <MyWishList MEMBERUID = {memberUid}/>
                        </div>                        
                    </div>
                    <div className="null-space" />
                </div>
            </div>
        </>
    );
}

export default MyWishInfo;