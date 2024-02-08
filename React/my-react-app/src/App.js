import './App.css';
import DoctorRegistration from './Components/Registration component/DoctorRegistration.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import PatientRegistration from './Components/Registration component/PatientRegistration.jsx';
import NavLinks from './Components/NavBar/NavLinks.jsx';


function App() {
  return (
    <>
     <BrowserRouter>
      <NavLinks/>
      <Routes>
        <Route path="/" element={<LoginPage/>} />

        <Route path="/doc-reg" element={<DoctorRegistration/>} />
        <Route path="/pat-reg" element={<PatientRegistration/>} />

      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
