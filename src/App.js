
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assest/CSS/style.css';
import './Assest/CSS/media.css'
import T1 from './Template/T1'; 
import T2 from './Template/T2'; 
import T3 from './Template/T3'; 


import { contactInfo } from "./Template/Config";

function App() {
  return (
    <div>
    {/* <T1 {...contactInfo} /> */}
    <T2 {...contactInfo} />
    {/* <T3 {...contactInfo} /> */}


    </div>
  );
}

export default App;
