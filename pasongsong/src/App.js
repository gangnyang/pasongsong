import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import MyPage from './components/page/MyPage.jsx';
import MainPage from  './components/page/MainPage.jsx';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  const sendRequest = async() => {
    const response = await axios.get('http://localhost:4000/');
    console.log(response);
    console.log(response.data);
  };

  useEffect(()=>{
    sendRequest();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<MyPage/>} />
          <Route path="main-page" element = {<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
