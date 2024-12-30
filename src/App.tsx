import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/menubars/Navbar";
import Footer from "./components/menubars/Footer";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Donate from "./pages/Donate";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/explore" element={<Service />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
