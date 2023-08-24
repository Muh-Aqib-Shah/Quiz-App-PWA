import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
   <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let endpoint: string = `${process.env.PUBLIC_URL}/ServiceWorker.js`

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("static/js/ServiceWorker.js",{
    scope:"/"
  });
}
