"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../app/components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Footer from "./components/Footer";


const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row w-full min-h-screen clip-main">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 md:px-16 py-12 bg-black/80 backdrop-blur-md"
        >
          <p className="text-md text-gray-300">Hi, I am</p>
          <h1 className="text-5xl font-bold text-white mt-1">Vishnu Dixit</h1>
          <p className="text-lg text-gray-300 mt-2">Web Developer</p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            {[
              { icon: <FaEnvelope />, link: "mailto:dixitvishnu57@gmail.com", color: "#D44638" },
              { icon: <FaGithub />, link: "https://github.com/VishnuDixit23", color: "#171515" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vishnu-dixit-b3815729a", color: "#0077B5" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                whileHover={{ scale: 1.2, color: social.color }}
                className="text-2xl transition duration-300 cursor-pointer"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="relative w-full md:w-1/2 h-[60vh] md:h-screen clip-right flex items-center justify-center bg-white"
        >
          <div className="w-[250px] md:w-[350px] rounded-lg overflow-hidden bg-gray-200 shadow-lg">
            <Image
              src="/vdbg5.jpg"
              alt="Vishnu Dixit"
              width={350}
              height={350}
              className="object-cover p-3 rounded-lg"
            />
          </div>
        </motion.div>
      </section>

   
      <Footer />
    </div>
  );
};

export default HeroSection;
