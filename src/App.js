import React from "react";

import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import Caregiv from "./pages/caregivpage/Caregiv";
import Singcaregiv from "./pages/singlecaregivpage/Singcaregiv";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contactus from "./pages/contactus/Contactus";




function App() {
  const user = false;
  
  return (
    <div className="App">     
      <Router>
          <TopBar />
          
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={user ? <Home /> : <Register />} />
              <Route path="/login" element={user ? <Home /> : <Login />} />
              <Route path="/write" element={user ? <Write />: <Register />} />
              <Route path="/caregivpage" element={<Caregiv />} />
              <Route path="/settings" element={ user ? <Settings />: <Register /> } />
              <Route path="/post/:postId" element={<Singcaregiv />} />
              <Route path="/contactus" element={<Contactus />} />

            </Routes>
          <Footer />
      </Router>

    </div>
  );
}

export default App;
