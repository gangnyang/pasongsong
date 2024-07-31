import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import MyPage from './components/page/MyPage.jsx';


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
      <MyPage/>
    </div>
  );
}

export default App;
