import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM ka import
import App from './App'; // Aapka main App component
import './styles/global.css'; // Global CSS styles

// Ensure ke 'root' element exist karta hai
const rootElement = document.getElementById('root');

if (rootElement) {
  // React 18 ke liye createRoot function ka istemal
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found!'); // Agar root nahi milta to error message
}
