import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';

function App() {

  useEffect(()=>{
    document.title="My Run"
  },[])

  return (
    <div className="App">
        <Router basename="/">
          <Layout/>
        </Router>
    </div>
  );
}

export default App;
