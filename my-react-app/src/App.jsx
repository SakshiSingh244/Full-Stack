import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
import Footer from './Components/Footer';

function App() {

  return (
    <Router>
     <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
     </div>
    </Router>
  )
}

export default App
