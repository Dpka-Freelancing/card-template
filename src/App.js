import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assest/CSS/style.css';
import './Assest/CSS/media.css';

import { contactInfo } from "./Template/Config";

import T1 from './Template/T1';
import T2 from './Template/T2';
import T3 from './Template/T3';
import T4 from './Template/T4';
import T5 from './Template/T5';
import T6 from './Template/T6';
import T7 from './Template/T7';
import T8 from './Template/T8';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/t1" element={<T1 {...contactInfo} />} />
        <Route path="/t2" element={<T2 {...contactInfo} />} />
        <Route path="/t3" element={<T3 {...contactInfo} />} />
        <Route path="/t4" element={<T4 {...contactInfo} />} />
        <Route path="/t5" element={<T5 {...contactInfo} />} />
        <Route path="/t6" element={<T6 {...contactInfo} />} />
        <Route path="/t7" element={<T7 {...contactInfo} />} />
        <Route path="/t8" element={<T8 {...contactInfo} />} />

        <Route path="*" element={<T1 {...contactInfo} />} /> {/* Default to T1 */}
      </Routes>
    </Router>
  );
}

export default App;
