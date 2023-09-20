import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <iframe
          className="fixed h-screen w-screen absolute left-0 top-0 -z-10"
          src="https://web-gl-fluid-simulation-puce.vercel.app/"
        ></iframe>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
