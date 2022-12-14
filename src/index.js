import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Pages/Home'
// import Home from './Components/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Profile from './Components/Pages/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginOptions from './Components/LoginOptions/LoginOptions';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
  </Routes> 
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
