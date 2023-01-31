import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contactus from'./Component/Contactus.jsx'
import Student from './Component/Student';
import Header from './Component/Header';
import Home from './Component/Home';
function App() {
  return (
    <>
    <Header/>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/Student' element={<Student/>}/>
    </Routes>
   
    </>
  );
}


export default App;
