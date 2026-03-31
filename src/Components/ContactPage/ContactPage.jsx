import React, { useState, useEffect } from "react";

export default function ContactPage() {

    const [showNavbar, setShowNavbar] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [programOpen, setProgramOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowNavbar(true);    
        } else {
          setShowNavbar(true);
        } 

      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    , []);  




  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white ">
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
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Student Management</a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Teacher Training</a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Scholarships</a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Digital Learning</a>
    </div>
  )}
</div>
        <a href="#" className="text-cyan-200 hover:text-black transition no-underline hover:no-underline">
          Schools
        </a>

        <a href="/login" className="text-purple-200 hover:text-black transition no-underline hover:no-underline">
          Overseas
        </a>
                <a href="/ContactPage" className="text-orange-200 hover:text-black transition no-underline hover:no-underline">
          Contact
        </a>
      </div>
    </div>

    {menuOpen && (
      <div className="flex flex-col items-center gap-4 pb-4 md:hidden animate-fade-in">
        <a href="/" className="no-underline hover:no-underline">Home</a>
        <a href="/AboutPage" className="no-underline hover:no-underline">About</a>
        <div className="w-full text-center">
              <button
                onClick={() => setProgramOpen(!programOpen)}
                className="w-full"
              >
                Programs & Services ⌄
              </button>

              {programOpen && (
                <div className="flex flex-col mt-2 bg-white rounded-lg shadow-md">
                  <a href="#" className="py-2 hover:bg-green-100">Student Management</a>
                  <a href="#" className="py-2 hover:bg-green-100">Teacher Training</a>
                  <a href="#" className="py-2 hover:bg-green-100">Scholarships</a>
                  <a href="#" className="py-2 hover:bg-green-100">Digital Learning</a>
                </div>
              )}
            </div>
        <a href="#" className="no-underline hover:no-underline">Schools</a>      
        <a href="/login" className="no-underline hover:no-underline">Overseas</a>
          <a href="/ContactPage" className="no-underline hover:no-underline">Contact</a>
      </div>
    )}
  </div>
)}
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 tracking-wide">
        Get in Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-purple-800 to-blue-800 p-6 rounded-2xl shadow-2xl">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Mobile / Telephone"
              className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Type your comments..."
              className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold py-3 rounded-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">

          {/* Address */}
          <div className="bg-gradient-to-br from-blue-800 to-purple-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold mb-3">📍 Location</h2>
            <p>
              Department of Education <br />
              P.O Box 446 <br />
              Waigani <br />
              National Capital District <br />
              Papua New Guinea
            </p>
          </div>

          {/* Emails */}
          <div className="bg-gradient-to-br from-indigo-800 to-blue-700 p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold mb-3">📧 Enquiries</h2>
            <p className="mb-2">
              General: <br />
              <span className="text-yellow-300">enquiries@education.gov.pg</span>
            </p>
            <p>
              Payroll: <br />
              <span className="text-yellow-300">payenquiry@education.gov.pg</span>
            </p>
          </div>

          {/* Phones */}
          <div className="bg-gradient-to-br from-purple-800 to-pink-700 p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold mb-3">📞 Phone</h2>
            <p>Main Line: +675 328 8800</p>
            <p>Teaching Service Commission: +675 328 8890</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-4 rounded-2xl shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 text-center">📍 Find Us on Map</h2>

          <div className="w-full h-[350px] rounded-xl overflow-hidden border border-gray-700">
            <iframe
              title="Department of Education PNG"
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1177.4002962165673!2d147.180643!3d-9.441455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x690231e515f0e0b9%3A0x9105dc882eccf983!2sMinistry%20of%20Education%20-%20Papua%20New%20Guinea!5e1!3m2!1sen!2sin!4v1774252963254!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-400 mt-10 text-sm">
        © 2026 Papua New Guinea Education Portal
      </p>
    </div>
  );
}
