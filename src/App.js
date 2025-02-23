import React from "react";
import CertificateGallery from "./CertificateGallery";
import "./style.css";

function App() {
  return (
    <div className="app">
      <h1>Dev Bhoomi Uttarakhand University</h1>
      <img src="/logo.png" alt="Event Logo" className="logo" />
      <h3>Innovators Engineer's Club Present - "शब्द-leela"</h3>
      <p> Coding-Based Treasure Hunt</p>
      <p> Search your name and download your certificate</p>
      <CertificateGallery />
    </div>
  );
}

export default App;
