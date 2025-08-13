import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./app/components/headers/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-pdf" element={<h1>Edit PDF Page</h1>} />
        <Route path="/compress-pdf" element={<h1>Compress PDF Page</h1>} />
        <Route path="/merge-pdf" element={<h1>Merge PDF Page</h1>} />
      </Routes>
    </>
  );
};

export default App;
