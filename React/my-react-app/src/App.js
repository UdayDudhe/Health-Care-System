import LoginPage from './LoginPage/LoginPage';
import './App.css';
import DoctorRegistration from './Registration component/DoctorRegistration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/doc-reg" element={<DoctorRegistration />} />

      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
