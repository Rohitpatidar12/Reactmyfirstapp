import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation1 from './Components/Navigation1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation1/>}>
        <Route index element={<Home/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
