import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "../src/Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import Contact from "./Pages/Contact/Contact";
import TopPage from "./TopPage";

function App() {
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <TopPage />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
