import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppShell from "./components/layout/AppShell";

import HomePage from "./pages/homePage";
import Register from "./pages/register";


export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<Register />} />
          
          
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}