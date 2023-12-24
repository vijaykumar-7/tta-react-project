import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (  
      <Router>
      <Navbar/>
      <Routes>        
          <Route exact path="/" element={<Home />} />       
      </Routes> 
      <Footer/>   
   </Router>
  );
}

export default App;