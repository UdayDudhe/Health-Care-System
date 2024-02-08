import LoginPage from './LoginPage/LoginPage';
import './App.css';
import PatientRegistration from './Registration component/PatientRegistration';
import DoctorRegistration from './Registration component/DoctorRegistration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/doc-reg" element={<DoctorRegistration />} />
        <Route path="/pat-reg" element={<PatientRegistration />} />

      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
