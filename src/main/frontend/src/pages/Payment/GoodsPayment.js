import React, {useState} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MemberInfo from "../../components/GoodsPayment/MemberInfo";
import MainCategory from "../../components/MainCategory";
import OrderInfo from "../../components/GoodsPayment/OrderInfo";
import {useLocation} from "react-router-dom";


function GoodsPayment(){

    const location = useLocation();
    const goods = location.state.products;

    const [memberData, setMemberData] = useState([]);

    const handelMemberDataChange = (data) => {
        setMemberData(data);

    }

    return(
        <>
            <Header/>
            <MainCategory/>
            <MemberInfo/>
            <OrderInfo goods = {goods}/>
            <Footer/>
        </>
    );
}

export default GoodsPayment;