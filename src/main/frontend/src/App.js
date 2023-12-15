import './styles/App.css';
import './styles/globalStyles.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, { useEffect } from 'react';

import Register from "./pages/register/Register";
import MainPage from "./pages/MainPage/MainPage";
import GoodsList from "./pages/Goods/GoodsList";
import GoodsDetails from "./pages/Goods/GoodsDetails";
import MyInfo from './pages/myinfo/MyInfo';
import ReviewWrite from "./components/GoodsDetails/GoodsDetailsTab/ReviewWrite";
import QnaWrite from "./components/GoodsDetails/GoodsDetailsTab/QnaWrite";
import MyAddressPop from './pages/myinfo/MyAddressPop';
import GoodsPayment from "./pages/Payment/GoodsPayment";
import OpenMarket from "./pages/OpenMarket/OpenMarket";
import AdminPage from "./pages/admin/AdminPage";
import AdminUser from './pages/admin/AdminUser';
import AdminMessage from './pages/admin/AdminMessage';
import GoodsControl from "./components/OpenMarket/GoodsControl";
import {CheckoutPage} from "./components/GoodsPayment/CheckoutPage.tsx";
import QnaReplyWrite from "./components/GoodsDetails/GoodsDetailsTab/QnaReplyWrite";
import CartPage from "./pages/cart/Cart";
import {SuccessPage} from "./components/GoodsPayment/paymentResult/SuccessPage";
import {FailPage} from "./components/GoodsPayment/paymentResult/FailPage";
import AdminProductMange from './pages/admin/AdminProductMange.js';
import AdminCouponPages from './pages/admin/AdminCouponPages.js';
import { isAuthTokenValid, logoutActionHandler } from './global/auth.js';
import AdminCouponList from './pages/admin/AdminCouponList.js';
import AdminProductAdd from './pages/admin/AdminProductAdd.js';
import MyPageReview from './components/myPage/inMyReview/MyPageReview.js';
import InMyReview from './pages/myinfo/InMyReview.js';
import InMyQnA from './pages/myinfo/InMyQnA.js';
import InMyCoupon from './pages/myinfo/InMyCoupon.js';

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/goodsList/query/:query" element={<GoodsList/>}/>
          <Route path="/goodsList/category/:categoryId" element={<GoodsList/>}/>
          <Route path="/goodsList/category/:categoryId/:subCategoryId" element={<GoodsList/>}/>
          <Route path="/goodsList/cart/:MEMBERUID" element={<CartPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/myinfo" element={<MyInfo/>}/>
          <Route path="/myinfo/address" element={<MyAddressPop/>}/>
          <Route path="/goodsDetails/:goodsId" element={<GoodsDetails/>}/>
          <Route path="/goodsDetails/reviewWrite/:goodsId" element={<ReviewWrite/>}/>
          <Route path="/goodsDetails/qnaWrite/:goodsId" element={<QnaWrite/>}/>
          <Route path="/goodsDetails/reply/:goodsId/:qnaNo" element={<QnaReplyWrite/>}/>
          <Route path="/goodsPayment" element={<GoodsPayment/>}/>
          <Route path="/openMarket/:brand" element={<OpenMarket/>}/>
          <Route path="/admin" element={<AdminPage/>}/>"
          <Route path="/admin/user" element={<AdminUser/>}/>
          <Route path="/admin/coupon" element={<AdminCouponPages/>}/>
          <Route path="/admin/message" element={<AdminMessage/>}/>
          <Route path="/openMarket/goodsControl" element={<GoodsControl/>}/>
          <Route path="/openMarket/goodsControl/:goodsId" element={<GoodsControl/>}/>
          <Route path="/success/*" element={<SuccessPage/>}/>
          <Route path="/fail/*" element={<FailPage/>}/>
          <Route path="/admin/goodsAllList" element={<AdminProductMange/>}/>
          <Route path="/admin/couponAllList" element={<AdminCouponList/>}/>
          <Route path="/admin/productAdd" element={<AdminProductAdd/>}/>



          
          <Route path="/pop/reviewAdd" element={<InMyReview/>}/>
          <Route path="/pop/qnaAdd" element={<InMyQnA/>}/>
          <Route path="/pop/couponAdd" element={<InMyCoupon/>}/>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;