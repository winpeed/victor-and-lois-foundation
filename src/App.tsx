import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/menubars/Navbar";
import Footer from "./components/menubars/Footer";
import AboutPage from "./pages/About";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
