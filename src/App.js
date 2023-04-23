import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Materi from "./page/materi";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path='/materi' element={
          <Materi />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
