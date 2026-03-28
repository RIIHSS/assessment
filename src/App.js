import React from "react";
// TODO: Import BrowserRouter, Routes, Route from react-router-dom

import Navbar from "./components/Navbar";
// TODO: Import pages (Dashboard, Profile, Settings)

function App() {
  return (
    <div>
      {/* TODO: Wrap the application with BrowserRouter */}

      <Navbar />

      {/* TODO: Replace this with Routes
           "/" → Dashboard
           "/profile" → Profile
           "/settings" → Settings
      */}
    </div>
  );
}

export default App;
