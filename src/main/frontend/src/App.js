import './styles/App.css';
import MainPage from "./pages/MainPage";
import './styles/globalStyles.css'

// src/main/frontend/src/App.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  let [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('api/hello')
        .then(res => setHello(res.data))
        .catch(error => console.log(error))
  }, []);

  return (
   <MainPage/>
  );
}


export default App;