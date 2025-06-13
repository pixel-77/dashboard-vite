import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Discussion from './pages/discussion.jsx';
import ResourceLibrary from './pages/ResourceLibrary.jsx';
import Revision from './pages/revision.jsx';
import Navbar from './components/navbar.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/resources" element={<ResourceLibrary />} />
        <Route path="/revision" element={<Revision />} />
      </Routes>
    </Router>
  );
};

export default App;
