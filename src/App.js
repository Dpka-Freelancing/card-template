import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assest/CSS/style.css';
import './Assest/CSS/media.css';

import T1 from './Template/T1'; 
import T2 from './Template/T2'; 
import T3 from './Template/T3'; 
import T4 from './Template/T4'; 
// import T5 from './Template/T5'; 

import { contactInfo } from "./Template/Config";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<T1 {...contactInfo} />} />
        <Route path="/t1" element={<T1 {...contactInfo} />} />
        <Route path="/t2" element={<T2 {...contactInfo} />} />
        <Route path="/t3" element={<T3 {...contactInfo} />} />
        <Route path="/t4" element={<T4 {...contactInfo} />} />
        {/* <Route path="/t5" element={<T5 {...contactInfo} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;