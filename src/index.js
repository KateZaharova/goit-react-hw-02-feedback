import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { FeedbackBtns } from 'components/FeedbackBtn/FeedbackBtns';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FeedbackBtns/>
  </React.StrictMode>
);
