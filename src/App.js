import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Properties from "./pages/Properties/Properties";
import ContactForm from "./pages/ContactForm/ContactForm";
import Testimonial from "./pages/Testimonial/Testimonial";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Phone from "./components/PhoneIcon/Phone";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Properties />
      <ContactForm />
      <Testimonial />
      <Phone/>
      <Footer />
    </div>
  );
};

export default App;
