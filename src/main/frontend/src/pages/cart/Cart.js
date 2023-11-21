import MainCategory from "../../components/MainCategory";
import Header from "../../components/Header";

import "../../styles/globalStyles.css"
import Footer from "../../components/Footer";
import CartList from "../../components/OrderList/CartList";


function Cart() {
    return (
        <>
            <Header/>
            <MainCategory/>
            <div className="page">
                <CartList/>
            </div>
            <Footer/>
        </>
    );
}

export default Cart;