import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<Single />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/setting" element={user ? <Setting /> : <Login />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          {/* <Route path="/register" element={user ? <Home /> : <Login />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
