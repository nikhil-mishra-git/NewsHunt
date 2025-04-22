import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import NewsSec from "./Components/NewsSec";
import NewsDetail from "./Pages/NewsDetail";

import ScrollToTop from "./Components/ScrollToTop";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <div>
      <Header />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Homepage />} >
          <Route path="/category/:type" element={<NewsSec />} />
        </Route>
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
