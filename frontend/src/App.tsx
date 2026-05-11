// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Pages/HomePage';
import { LoginPage } from './components/LoginPage/LoginPage'; 
import { RegistrationPage } from './components/RegistrationPage/RegistrationPage';
import { DashboardPage } from './components/Pages/Dashboard/DashboardPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;