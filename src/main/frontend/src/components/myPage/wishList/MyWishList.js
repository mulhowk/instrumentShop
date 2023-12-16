import "../../../styles/myInfo/myWishList.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const MyWishList = (props) => {

    const navi = useNavigate();
    const MEMBERUID = props.MEMBERUID;
    const [wishList, setWishList] = useState([]);
    {console.log(wishList)}
    useEffect(() => {
        axios.get(`/wishList/${MEMBERUID}`)
            .then(res => {
                setWishList(res.data);
            }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const handelGoGoodsDetails = (id) => {

        return navi(`/goodsDetails/${id}`);
    }

    const itemWishList = wishList.map((item, index) => (
        <div className="wish-item" onClick={() => handelGoGoodsDetails(item.goods.goodsId)}>
            <div className="wish-item-box">
                <div className="w-i-img">
                    <img src={item.goods.goodsImg} alt={item.goods.goodsId}/>
                </div>
                <div className="w-i-title">
                    {item.goods.goodsName}
                </div>
                <div className="w-i-price">
                    {item.goods.goodsPrice.toLocaleString()} 원
                </div>
            </div>
        </div>
    ));

    return (
        <>
            {itemWishList} 
        </>
    );
}

export default MyWishList;