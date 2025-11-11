import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { ScrollRestoration } from "./components/scroll-restoration";

function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Navigation />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
