import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/signin" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
