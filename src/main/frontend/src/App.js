import './styles/App.css';
import './styles/globalStyles.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Register from "./pages/register/Register";
import MainPage from "./pages/MainPage/MainPage";
import GoodsList from "./pages/Goods/GoodsList";
import GoodsDetails from "./pages/Goods/GoodsDetails";
import MyInfo from './pages/myinfo/MyInfo';
import ReviewWrite from "./components/GoodsDetails/GoodsDetailsTab/ReviewWrite";
import React from "react";
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

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/goodsList/query/:query" element={<GoodsList/>}/>
          <Route path="/goodsList/category/:categoryId" element={<GoodsList/>}/>
          <Route path="/goodsList/category/:categoryId/:subCategoryId" element={<GoodsList/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/myinfo" element={<MyInfo/>}/>
          <Route path="/myinfo/address" element={<MyAddressPop/>}/>
          <Route path="/goodsDetails/:goodsId" element={<GoodsDetails/>}/>
          <Route path="/goodsDetails/reviewWrite/:goodsId" element={<ReviewWrite/>}/>
          <Route path="/goodsDetails/qnaWrite/:goodsId" element={<QnaWrite/>}/>
          <Route path="/goodsDetails/reply/:goodsId/:qnaNo" element={<QnaReplyWrite/>}/>
          <Route path="/goodsPayment" element={<GoodsPayment/>}/>
          <Route path="/openMarket" element={<OpenMarket/>}/>
          <Route path="/admin" element={<AdminPage/>}/>"
          <Route path="/admin/user" element={<AdminUser/>}/>
          <Route path="/admin/message" element={<AdminMessage/>}/>
          <Route path="/openMarket/goodsControl" element={<GoodsControl/>}/>

          {/* 상품관리 (리스트) */}
          {/* 상품관리 (등록) */}
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;