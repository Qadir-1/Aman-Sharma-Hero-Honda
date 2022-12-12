/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./Component/Homescreen";
import HomeScreen2 from "./Component/HomeScreen2";
import Search from "./Component/Search";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/home" element={<HomeScreen2 />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;