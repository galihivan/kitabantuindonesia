import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import UserProfile from "./pages/userProfile/UserProfile";
import Navbar from "./components/navbar/Navbar";
import Explore from "./pages/explore/Explore";
function App() {
  return (
    <Router>
      {/* Navbar akan muncul di semua halaman */}
      <Navbar />

      {/* Routing halaman */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
