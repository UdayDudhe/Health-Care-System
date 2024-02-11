import './App.css';
import DoctorRegistration from './Components/Registration component/DoctorRegistration.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import PatientRegistration from './Components/Registration component/PatientRegistration.jsx';
import NavLinks from './Components/NavBar/NavLinks.jsx';
import AdminHomePage from './Components/Entities/AdminPage/AdminHomePage.jsx';
import DoctorHomePage from './Components/Entities/DoctorPage/DoctorHomePage.jsx';
import PatientHomePage from './Components/Entities/PatientPage/PatientHomePage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLinks />
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/doc-reg" element={<DoctorRegistration />} />
          <Route path="/pat-reg" element={<PatientRegistration />} />
          <Route path="/adminHome" element={<AdminHomePage />} />
          <Route path="/docHome" element={< DoctorHomePage/>} />
          <Route path="/patientHome" element={< PatientHomePage/>} />

          
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
