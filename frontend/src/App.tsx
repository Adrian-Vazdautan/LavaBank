// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Pages/HomePage';
import { LoginPage } from './components/LoginPage/LoginPage'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;