import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./tailwind.css";

import BlogProvider from "context/BlogContext";

import { BrowserRouter } from 'react-router-dom';
import Routes from "routes/Routes"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <BlogProvider>
      <App />
      <Routes />
    </BlogProvider>
    </BrowserRouter>
  </React.StrictMode>
);