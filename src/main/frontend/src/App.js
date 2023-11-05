import './styles/App.css';
import './styles/globalStyles.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Register from "./pages/register/Register";
import MainPage from "./pages/MainPage";
import GoodsList from "./pages/GoodsList";
import GoodsDetails from "./pages/GoodsDetails";
import MyInfo from './pages/myinfo/MyInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/goodsList" element={<GoodsList/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/myinfo" element={<MyInfo/>}/>
          <Route path="/goodsDetails" element={<GoodsDetails/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;