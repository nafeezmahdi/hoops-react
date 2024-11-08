import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Home />} path="/home" />
          <Route element={<Blogs />} path="/blogs" />
          <Route element={<CaseStudies />} path="/case-studies" />
          <Route element={<About />} path="/about-us" />
          <Route element={<Contact />} path="/contact-us" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
