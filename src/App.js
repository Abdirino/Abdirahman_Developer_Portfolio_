import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from '../src/Pages/Home/Home'
import About from './Pages/About/About';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
