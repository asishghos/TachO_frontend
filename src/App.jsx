import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TechNovaHomepage from './Pages/home_page.jsx';
// import AboutUsPage from './Pages/about_us_page.jsx';
// import ContactPage from './Pages/contact_us_page.jsx';
// import ServicesPage from './Pages/services_page.jsx';
// import NotFound from './Pages/not_found_page.jsx';
import HomePage from './Pages/HomePage.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} /> */}
        {/* <Route path="*" element={<NotFound />} /> Catch-all route */}
      </Routes>
    </Router>
  );
};

export default App;
