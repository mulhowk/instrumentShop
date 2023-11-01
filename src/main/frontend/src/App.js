import './styles/App.css';
import './styles/globalStyles.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Register from "./pages/register/Register";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;