import './styles/App.css';
import './styles/globalStyles.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Register from "./pages/register/Register";
import MainPage from "./pages/MainPage";
import GoodsList from "./pages/goodsList";
import MyInfo from './pages/myinfo/MyInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/goodsList" element={<GoodsList/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/myinfo" element={<MyInfo/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;