import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    <Header></Header>
    <Note></Note>
    <Footer></Footer>
  </div>
);


