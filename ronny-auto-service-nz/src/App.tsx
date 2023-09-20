import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Router>
        <iframe
          className="h-screen w-screen absolute left-0 top-0 "
          src="https://web-gl-fluid-simulation-puce.vercel.app/"
        ></iframe>
        <Routes>
          <Route path="/" element={<Home />}/> 
          
          <Route path="/register" element={<Form />} />
            
    
        </Routes>
      </Router>
    </>
  );
}

export default App;
