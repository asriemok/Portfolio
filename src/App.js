import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BlogList from "./pages/Blog/BlogList";
import Testimonials from "./pages/Testimonials/Testimonials";
import NotFound from "./pages/NotFound";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import Login from "./components/Loging/Login";


  
function App() {
  return (
    <div>
    <Router>
      <Header />

      <Routes>
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/" exact element={<Home />} />        
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
