import React from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PracticeScreen from "./screens/ProblemScreen";
import FaqScreen from "./screens/FaqScreen";
import CompeteScreen from "./screens/CompeteScreen";
import Forum from "./screens/forum";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/practice" element={<PracticeScreen />} />
        <Route path="/faq" element={<FaqScreen />} />
        <Route path="/compete" element={<CompeteScreen />} />
        <Route path="/discuss" element={<Forum />} />
      </Routes>
    </>
  );
};

export default App;
