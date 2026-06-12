import HomePage from "./pages/home.page";
import "./App.css";
import AboutPage from "./pages/about.page";
import ServicePage from "./pages/service.page";
import ContactPage from "./pages/contact.page";
import {BrowserRouter as Router, Routes, Route} from "react-router";
import NotfoundPage from "./pages/notfound.page";
import AdminDashboard from "./pages/adminDashboard.page";
import ProductDetailPage from "./pages/productdetail.page";

const App = () => {
  return (
  <main>
    <Router>
      <Routes>
        <Route path= "/" element= {<HomePage />} />
        <Route path = "/about" element= {<AboutPage />} />
        <Route path = "/contact" element= {<ContactPage/>} />
        <Route path = "/service" element= {<ServicePage/>} />
        <Route path= "*" element={<NotfoundPage/> }/>
        <Route path= "/admin/dashboard" element={<AdminDashboard/> }/>
        <Route path= "/products/:id" element={<ProductDetailPage/> }/>
      </Routes>
    </Router> 
  </main>
);
};
export default App;