import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main className='container'>
      <LeftColumn/>
      <RightColumn/>
    </main>
  </React.StrictMode>
  
);
reportWebVitals();
