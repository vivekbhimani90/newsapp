
import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App=()=>{

   const pageSize=20;

   
    return (
      <>
      <BrowserRouter>
      <Navbar />
      
      
      <Routes>
      <Route excat path="/" element={<News key="general" pageSize={pageSize} country="in" category="general" />}/>
      <Route excat path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business" />}/>
      <Route excat path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}/>
      <Route excat path="/general" element={<News key="general" pageSize={pageSize} country="in" category="general" />}/>
      <Route excat path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health" />}/>
      <Route excat path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science" />}/>
      <Route excat path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports" />}/>
      <Route excat path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology" />}/>
     

     
      
      </Routes>
      </BrowserRouter>
      </>
    )
  }


export default App;