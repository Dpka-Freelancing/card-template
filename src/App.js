
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assest/CSS/style.css';
import './Assest/CSS/media.css'
import T1 from './Template/T1'; 
import { contactInfo } from "./Template/Config";

function App() {
  return (
    <div>
    <T1 {...contactInfo} />
    </div>
  );
}

export default App;
