import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";



function AppContent() {

  return (
    <>
    
    <Home />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
