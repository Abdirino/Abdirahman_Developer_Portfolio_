import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy, useEffect, useState } from "react";

import Loader from "./Components/Loader/Loader";
import TopPage from "./TopPage";

const Home = lazy(() => import("../src/Pages/Home/Home"))
const About = lazy(() => import("./Pages/About/About"))
const Services = lazy(() => import("./Pages/Services/Services"))
const Contact = lazy(() => import("./Pages/Contact/Contact"))
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"))

function App() {
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 1700);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <TopPage />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
