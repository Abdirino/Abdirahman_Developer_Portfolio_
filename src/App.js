import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

import Home from "../src/Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
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
            {loading ? <Loader /> : <Route path="/" element={<Home />} />}
            {loading ? <Loader /> : <Route path="/about" element={<About />} />}
            {loading ? <Loader /> : <Route path="/services" element={<Services />} />}
            {loading ? <Loader /> : <Route path="/contact" element={<Contact />} />}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
