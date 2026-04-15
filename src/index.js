import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // ← Cette ligne importe ton CSS global


// Supprime le faux positif ResizeObserver
const resizeObserverErr = window.console.error;
window.console.error = (...args) => {
  if (args[0]?.includes?.('ResizeObserver loop')) return;
  resizeObserverErr(...args);
};

const resizeObserverLoopErrRe = /^ResizeObserver loop/;
const originalError = console.error;
console.error = (...args) => {
  if (typeof args[0] === "string" && resizeObserverLoopErrRe.test(args[0])) return;
  originalError(...args);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
