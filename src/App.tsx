import React from 'react';
import { ReactDOM } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/timeline" element={<Timeline/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
