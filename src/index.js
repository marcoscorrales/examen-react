import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Pelis } from './components/Pelis/Pelis';
import { ShowPeli } from './components/ShowPeli/ShowPeli';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
 {/* Index  */}
  <Route path='/' element={<Pelis/>}/>
  {/* Mostrar la peli  */}
  <Route path='/pelis/:id' element={<ShowPeli/>}/> 

  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
