import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { ArticlePage } from "./pages/ArticlePage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ServicesPage } from "./pages/ServicesPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsAppFloatingButton />
    </Router>
  );
}
