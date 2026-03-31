import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    type: "single",
    title: "Direct & Indirect Education",
    content:
      "The Department of Education leads the delivery of education services directly through government schools and indirectly through private schools regulation.",
    color: "from-purple-400 to-pink-400",
  },
  {
    type: "double",
    title: "Core Functions",
    content:
      "Curriculum, Examinations, Education Standards, National Policies, National Institutions, Teacher Management, Government Tuition Policy.",
    color: "from-green-400 to-blue-400",
  },
  {
    type: "double",
    title: "Mandate",
    content:
      "The Department is the executive branch of the National Education System, deriving powers from the Education Act 1983 and other relevant laws.",
    color: "from-yellow-400 to-orange-400",
  },
  {
    type: "single",
    title: "Minister for Education",
    content:
      "The Minister oversees management of education, curriculum standards, examinations, teaching days, pupil-teacher ratios, and language of instruction.",
    color: "from-red-400 to-pink-600",
  },
  {
    type: "double",
    title: "National Department of Education",
    content:
      "Responsible for national curriculum, teacher registration, in-service training, inspections, exams, national institutions, and school funding supervision.",
    color: "from-indigo-400 to-purple-700",
  },
  {
    type: "double",
    title: "Office of Libraries and Archives",
    content:
      "OLA coordinates libraries and archives, preserving national collections for all Papua New Guineans.",
    color: "from-teal-400 to-green-600",
  },
  {
    type: "single",
    title: "Teaching Service Commission",
    content:
      "Oversees teacher employment, salaries, welfare, and supports teachers’ rights.",
    color: "from-pink-400 to-red-500",
  },
  {
    type: "double",
    title: "National Education Board",
    content:
      "Highest decision-making body overseeing education system development and NEP implementation, advising Minister, coordinating with provinces and TSC.",
    color: "from-blue-400 to-indigo-600",
  },
  {
    type: "double",
    title: "Department Head",
    content:
      "The Secretary for Education is the department head, chairs NEB, oversees teacher qualifications, school inspection, and teacher certification.",
    color: "from-orange-400 to-yellow-500",
  },
];

const boxVariants = {
  offscreen: { opacity: 0, y: 50, scale: 0.9 },
  onscreen: { opacity: 1, y: 0, scale: 1 },
};

export default function EducationPage() {

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
    <div className="min-h-screen bg-gray-100">
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

      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 mt-10 py-10">
        Department of Education – Papua New Guinea
      </h1>

      <div className="flex flex-col gap-8">
        {sections.map((section, index) => {
          // Single box layout
          if (section.type === "single") {
            return (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                variants={boxVariants}
                className={`w-full p-8 rounded-2xl shadow-xl bg-gradient-to-br ${section.color} text-white hover:scale-105 transform transition-transform`}
              >
                <motion.h2
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="text-3xl font-bold mb-4"
                >
                  {section.title}
                </motion.h2>
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg leading-relaxed"
                >
                  {section.content}
                </motion.p>
              </motion.div>
            );
          }

          // Double box layout
          return (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              variants={boxVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              <motion.div
                className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${section.color} text-white hover:scale-105 transform transition-transform`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
                <p className="text-md leading-relaxed">{section.content}</p>
              </motion.div>

              <motion.div
                className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${section.color} text-white hover:scale-105 transform transition-transform`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
                <p className="text-md leading-relaxed">{section.content}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}