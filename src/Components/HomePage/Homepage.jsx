import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from "../../assets/Homepageimages/slider1.jpg";
import slider2 from "../../assets/Homepageimages/slider2.jpg";
import slider3 from "../../assets/Homepageimages/slider3.jpg";
import secrotory from "../../assets/Homepageimages/secrotory.png";
import minister from "../../assets/Homepageimages/minister.png";
import gallery1 from "../../assets/Homepageimages/gallery1.jpg";
import gallery2 from "../../assets/Homepageimages/gallery2.jpg";
import gallery3 from "../../assets/Homepageimages/gallery3.jpg";
import gallery4 from "../../assets/Homepageimages/gallery4.jpg";
import activites1 from "../../assets/Homepageimages/activites1.jpg";
import activites2 from "../../assets/Homepageimages/activites2.jpg";
import { motion } from "framer-motion"; 
import TimelineComponent from "../Timeline/TimelineComponent";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [overseasOpen, setOverseasOpen] = useState(false);

  const slides = [slider1, slider2, slider3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-poppins">
      <div className="relative h-[450px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt="slide"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-yellow-300 drop-shadow-lg animate-pulse">
            PNG EDUCATION
          </h1>
        </div>
      </div>

      {showNavbar && (
  <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 shadow-lg">
    <div className="flex justify-between items-center p-4 ">
      <h1 className="text-white font-bold text-xl">PNG EDUCATION</h1>
          <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <div className="hidden md:flex gap-8 text-lg font-bold ">
        <a href="/" className="text-white hover:text-black transition no-underline hover:no-underline">
          Home
        </a>
        <a href="/AboutPage" className="text-pink-200 hover:text-black transition no-underline hover:no-underline">
          About
        </a>
<div
  className="relative"
  onMouseEnter={() => setProgramOpen(true)}   // desktop hover
  onMouseLeave={() => setProgramOpen(false)}  // desktop hover
>
  <button
    onClick={() => setProgramOpen(!programOpen)} // mobile click
    className="text-green-200 hover:text-black transition flex items-center gap-1"
  >
    Programs & Services
    <span className={`transition-transform ${programOpen ? "rotate-180" : ""}`}>
      ⌄
    </span>
  </button>

  {/* Dropdown */}
  {programOpen && (
    <div className="absolute left-0 w-48 bg-white rounded-lg shadow-lg transition-all duration-300 z-50">
      <a href="https://pngnsoestem.com" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Student Management</a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Teacher Training</a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Scholarships</a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Digital Learning</a>
    </div>
  )}
</div>
        <a href="#" className="text-cyan-200 hover:text-black transition no-underline hover:no-underline">
          Schools
        </a>

       <div className="relative"
       onMouseEnter={() => setOverseasOpen(true)}   // desktop hover
        onMouseLeave={() => setOverseasOpen(false)}  // desktop hover
        >
          <button
            onClick={() => setOverseasOpen(!overseasOpen)} // mobile click
            className="text-cyan-200 hover:text-black transition flex items-center gap-1" 
          >
            Overseas
            <span className={`transition-transform ${overseasOpen ? "rotate-180" : ""}`}>
              ⌄
            </span>
          </button> 
          {overseasOpen && (
            <div className="absolute left-0 w-48 bg-white rounded-lg shadow-lg transition-all duration-300 z-50">
              <a href="https://pngnsoestem.com" className="block px-4 py-2 text-gray-700 hover:bg-green-100">PNG STEM</a>
              <a href="https://pngnsoestem.com" className="block px-4 py-2 text-gray-700 hover:bg-green-100">PNG Education Overseas</a>
            </div>
          )}
        </div>

                <a href="/ContactPage" className="text-orange-200 hover:text-black transition no-underline hover:no-underline">
          Contact
        </a>
      </div>
    </div>

    {menuOpen && (
      <div className="flex flex-col items-center gap-4 pb-4 md:hidden animate-fade-in">
        <a href="/" className="no-underline hover:no-underline">Home</a>
        <a href="AboutPage" className="no-underline hover:no-underline">About</a>
        <div className="w-full text-center">
              <button
                onClick={() => setOverseasOpen(!overseasOpen)}
                className="w-full"
              >
                Overseas ⌄
              </button>

              {overseasOpen && (
                <div className="flex flex-col mt-2 bg-white rounded-lg shadow-md">
                  <a href="https://pngnsoestem.com" className="py-2 hover:bg-green-100">PNG STEM</a>
                  <a href="https://pngnsoestem.com" className="py-2 hover:bg-green-100">PNG Education Overseas</a>
                </div>
              )}
            </div>
        <a href="#" className="no-underline hover:no-underline">Schools</a>      
        <a href="https://pngnsoestem.com" className="no-underline hover:no-underline">Overseas</a>
          <a href="/ContactPage" className="no-underline hover:no-underline">Contact</a>
      </div>
    )}
  </div>
)}

   
      <section className="p-10 bg-gradient-to-r from-pink-400 to-yellow-300 text-center animate-slide-up">
        <h2 className="text-3xl font-bold text-blue-900">About Education in PNG</h2>
        <p className="mt-4 text-purple-900">
          The Department of Education in Papua New Guinea is committed to
          delivering quality education to all citizens. Our mission is to
          empower students with knowledge, skills, and values to contribute
          positively to society.
        </p>
      </section>

      <section className="p-10 bg-green-300 animate-slide-up">
        <h2 className="text-center text-red-700 text-3xl mb-6">
          Our Key Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
            
          <div className="bg-white p-5 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300">
               <motion.section
        className="max-w-6xl mx-auto text-center px-6 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
            <h4 className="font-bold">Student Management</h4>
            <p>
              Maintain student records, attendance, and academic performance
              digitally.
            </p>
            </motion.section>
          </div>
          <div className="bg-yellow-200 p-5 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300">
                  <motion.section
        className="max-w-6xl mx-auto text-center px-6 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
            <h4 className="font-bold">Teacher Development</h4>
            <p>Provide continuous training, workshops, and teaching resources.</p>
            </motion.section>
          </div>
          <div className="bg-blue-200 p-5 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300">
                <motion.section
        className="max-w-6xl mx-auto text-center px-6 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
            <h4 className="font-bold">School Administration</h4>
            <p>Efficient systems to manage schools, reports, and communications.</p>
            </motion.section>
          </div>
        </div>
      </section>

        {/* Subjects & Activities */}
        <section className="p-10 bg-gradient-to-r from-red-100 to-pink-100 animate-slide-up">
      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">Subjects & Activities</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: "Mathematics", img: gallery1 },
            { title: "Science", img: gallery2 },
            { title: "Arts", img: gallery3 },
            { title: "Sports", img: gallery4 },
          ].map((subject, i) => (
            <motion.div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img src={subject.img} alt={subject.title} className="w-full h-40 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <h3 className="text-white text-xl font-bold">{subject.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
        </section>

      <div className="p-10 bg-blue-300 text-center animate-slide-up">
        <h3 className="mb-4 text-white">Explore Programs</h3>
        <select className="form-select w-50 mx-auto">
          <option>Primary Education</option>
          <option>Secondary Education</option>
          <option>Technical Training</option>
          <option>Scholarships</option>
        </select>
      </div>

      <div className="p-10 bg-purple-300 animate-slide-up">
        <h3 className="text-center text-white mb-6 text-2xl">School Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src={activites1}
            className="rounded-xl transform hover:scale-110 transition duration-500"
          />
          <img
            src={activites2}
            className="rounded-xl transform hover:scale-110 transition duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
            className="rounded-xl transform hover:scale-110 transition duration-500"
          />
        </div>
      </div>

      <section className="p-10 bg-orange-200 text-center animate-slide-up">
        <h2 className="text-3xl font-bold text-red-700">Why Education Matters</h2>
        <p className="mt-4 text-blue-900">
          Education is the foundation of national development. It improves
          livelihoods, promotes equality, and builds a stronger future for
          Papua New Guinea.
        </p>
      </section>

      <div className="bg-yellow-200 p-6 text-center animate-fade-in">
        <marquee className="text-xl font-bold text-red-600">
          New Schools Opening | Scholarships Available | Teacher Training
          Programs | Digital Learning Coming Soon
        </marquee>
      </div>

      <section className="p-10 bg-red-200 animate-slide-up">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img src={secrotory} className="rounded-xl shadow-lg" alt="Secretary" />
          <div>
                  <motion.section

           initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              WELCOME MESSAGE FROM DR. UKE KOMBRA
            </h2>
            <p className="text-sm text-black space-y-2">
              HELLO, thank you for taking time to visit the Department of
              Education's new-look website.
              <br /><br />
              We have redeveloped our website so it is more modern but simple
              and user-friendly for our visitors to easily access and find
              information and data about important policies and programs and
              announcements, news and events about what is happening in the
              National Education System.
              <br /><br />
              Our mobile version will enable users to easily access the website
              using their mobile phones. We aim to inform and connect with
              students, teachers, parents and everyone in real time.
              <br /><br />
              We will continue to improve and welcome your feedback and
              suggestions so the website meets everyone's needs.
              <br /><br />
              Thank you.
              <br />Dr Uke Kombra
              <br />Secretary for Education
            </p>
            </motion.section>
          </div>
        </div>
      </section>

            <section className="p-10 bg-blue-200 animate-slide-up">                                 
        <div className="grid md:grid-cols-2 gap-6 items-center">    
          <img src={minister} className="rounded-xl shadow-lg" alt="Minister" />
          <div> 

       <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >

            <h2 className="text-2xl font-bold text-red-700 mb-3">
              WELCOME MESSAGE FROM HON. LUCAS DEKENA
            </h2>
            <p className="text-sm text-black">
              I welcome you to the new-look website for the National Department
              of Education.
              <br /><br />
              Education is a major strategy for socio-economic development in
              Papua New Guinea.
              <br /><br />
              Our vision is to provide an education system that is affordable,
              values-driven, and prepares skilled, healthy citizens ready to
              contribute to national development.
              <br /><br />
              We aim to deliver 13 years of quality education including early
              childhood and modern 21st-century skills.
              <br /><br />
              I recommend this website to students, teachers, parents, and the
              wider community.
              <br /><br />
              Happy browsing!
              <br />Hon. Lucas Dekena
              <br />Minister for Education
            </p>
            </motion.section>
          </div>
        </div>
      </section>

   <section>
    <TimelineComponent />
   </section>


    </div>
  );
}