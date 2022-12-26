import Layout from "./layout";
import About from "./pages/about";
import Home from "./pages/home";
import "./App.css";
import "./assets/boxicons.min.css";
import Team from "./pages/Team";
import { Faq } from "./pages/faq/Faq";
import JobList from "./pages/job_list";
import OurProjects from "./pages/our_projects";
import { ProjectDetails } from "./pages/projects_details";
import Contact from "./pages/contact";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import { motion } from "framer-motion";
function App() {
  const [loading, setLoading] = useState(true);
  const [topBtn, setTopBtn] = useState(false);
  const [height, setHeight] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.addEventListener("scroll", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setHeight(window.scrollY);
  };

  const handleTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setTopBtn(false);
  };

  setTimeout(() => setLoading(false), [3000]);

  if (loading) return <Preloader />;

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/project-details/:slug" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>

      {height > 560 && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ bounceDamping: 5, duration: 0.3 }}
          onClick={() => handleTop()}
          style={{
            position: "fixed",
            padding: "10px",
            fontSize: "20px",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#f89973",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "99999",
          }}
        >
          <ion-icon name="arrow-up-outline" style={{ margin: "0" }}></ion-icon>
        </motion.button>
      )}
    </>
  );
}

export default App;
