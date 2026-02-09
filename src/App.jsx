import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/Product';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Experiments from './Pages/Experiment';
import Results from './Pages/Results';
import Experts from './Pages/Experts';
import RequestAccess from './Pages/RequestAccess';
import Run from './Pages/Run';
import Api from './Pages/Api';
import Footer from './components/Footer';
import Research from './Pages/Research';
import Datasets from './Pages/Datasets';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"; 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/datasets" element ={<Datasets/>}/>
        <Route path="/Experiment" element={<Experiments />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Experts" element={<Experts/>} />
        <Route path="/Experiment/run" element={<Run/>}/>
        <Route path="/RequestAccess" element={<RequestAccess />} />
         <Route path="/api" element={<Api/>} />
         <Route path="/research" element={<Research/>}/>
      </Routes>
      <Footer/>
         <ToastContainer position="top-center" autoClose={3000} />
    </>
  )
}

export default App
