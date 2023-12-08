import MainCategory from "../../components/MainCategory";
import Header from "../../components/Header";

import "../../styles/globalStyles.css"
import Footer from "../../components/Footer";
import CartList from "../../components/OrderList/CartList";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";





function CartPage() {

    const params = useParams();
    const MEMBERUID = params.MEMBERUID;
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        axios.get(`/cart/${MEMBERUID}`)
            .then(response => {
                setCartList(response.data);
            }).catch(error => {
            console.log('Error fetching data:', error );
        });
    }, []);

    return (
        <>
            <Header/>
            <MainCategory/>
            <div className="page">
                <CartList list = {cartList}/>
            </div>
            <Footer/>
        </>
    );
}

export default CartPage;