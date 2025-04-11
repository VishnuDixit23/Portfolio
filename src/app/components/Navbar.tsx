import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<"about" | "skills" | "projects" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll < lastScroll || currentScroll < 50);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/vishnu dixit (2).pdf";
    link.download = "Vishnu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const CardOverlay = ({ type }: { type: "about" | "skills" | "projects" }) => (
    <AnimatePresence>
      <motion.div
        key={type}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 text-white p-8 rounded-2xl shadow-2xl max-w-4xl w-full overflow-y-auto max-h-[90vh]"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold capitalize">
              {type === "about" ? "About Me" : type === "skills" ? "Skills" : "Projects"}
            </h2>
            <button
              onClick={() => setActiveCard(null)}
              className="text-white text-xl hover:text-red-400 transition"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          {type === "about" ? (
            <div className="space-y-4 text-gray-300 text-lg">
                <p className="text-gray-300 text-lg">
                Hardworking and dedicated
                <span className="text-stone-500"> Full-Stack Developer</span> with
                a strong foundation in data structures and algorithms. Experienced
                in building scalable web applications, proficient in both frontend
                and backend development.
              </p>
              <p className="text-gray-300 text-lg">
                Passionate about problem-solving and optimizing code efficiency.
                Currently expanding expertise in
                <span className="text-stone-400"> Generative AI</span> to stay at
                the forefront of technological advancements.
              </p>
              <p className="text-gray-300 text-lg">
                Eager to contribute technical skills and innovative solutions to
                dynamic development teams.
              </p>
              <div className="bg-gray-300/20 p-4 rounded-lg mt-4">
                <h3 className="text-xl font-semibold text-gray-200">Education</h3>
                <p className="mt-2 text-gray-300">
                  <span className="font-semibold text-stone-400">Bachelor of Technology</span> in{" "}
                  <span className="text-white">Artificial Intelligence and Data Science</span>
                </p>
                <p className="text-stone-300 mt-1">JECRC Foundation</p>
                <p className="text-stone-300 mt-1">
                  ~ Current Semester: 4th <br />
                  ~ CGPA: 9.1
                </p>
             
              </div>
            </div>
          ) : type === "skills" ? (
            <div className="text-gray-300">
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>Generative AI</li>
                <li>JavaScript / TypeScript</li>
                <li>MongoDB / PostgreSQL</li>
                <li>Tailwind CSS / Framer Motion</li>
                <li>DSA, Problem Solving</li>
              </ul>
            </div>
          ) : (
            <div className="text-gray-300 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Trainify – AI-Powered Workout Planner</h3>
                <ul className="list-disc ml-6 space-y-1 text-base">
                  <li><strong>Tech Stack:</strong> Next.js, React, Node.js, Express, MongoDB, Tailwind CSS</li>
                  <li>Developed a full-stack web app that personalizes, tracks, and optimizes fitness routines.</li>
                  <li>Built an AI-powered workout & diet generator, tailoring plans to user goals, experience, and preferences.</li>
                  <li>Implemented routine creation & tracking, allowing users to customize and log workouts.</li>
                  <li>Integrated progress tracking & analytics, providing insights through visual trends and stats.</li>
                  <li>Designed a secure JWT-based authentication system with plans for social logins.</li>
                  <li>Future plans include mobile expansion, community features, and ML-driven optimizations.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">JECRC MUN Club Website</h3>
                <p className="text-base">
                  Developed and deployed a fully functional, live website for the JECRC MUN (Model United Nations) Club using React.js and Tailwind CSS. The site (
                  <a href="https://jecrcmun.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">jecrcmun.in</a>
                  ) features event details, team information, and registration capabilities, all wrapped in a responsive and modern UI.
                </p>
                <p className="text-base mt-2">
                  Managed the complete frontend development and deployment process, enhancing the club’s online presence and improving accessibility for participants and members.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 shadow-lg transition-all duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex items-center justify-between px-6 py-5">
          <Link href="/">
            <Image src="/Vishnu Dixit.png" alt="Logo" width={50} height={50} priority />
          </Link>

          <ul className="hidden md:flex items-center space-x-10 uppercase text-xm text-black font-semibold">

            <li>
              <button onClick={() => setActiveCard("about")} className="hover:text-gray-400 transition duration-300">About Me</button>
            </li>
            <li>
              <button onClick={() => setActiveCard("skills")} className="hover:text-gray-400 transition duration-300">Skills</button>
            </li>
            <li>
              <button onClick={() => setActiveCard("projects")} className="hover:text-gray-400 transition duration-300">Projects</button>
            </li>
            <li>
              <button onClick={handleResumeDownload} className="hover:text-gray-400 transition duration-300">Resume</button>
            </li>
          </ul>

          <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6">
            <ul className="flex flex-col space-y-4 mt-4 text-white text-lg">
              <li><button onClick={() => { setActiveCard("about"); setMenuOpen(false); }}>About Me</button></li>
              <li><button onClick={() => { setActiveCard("skills"); setMenuOpen(false); }}>Skills</button></li>
              <li><button onClick={() => { setActiveCard("projects"); setMenuOpen(false); }}>Projects</button></li>
              <li><button onClick={() => { handleResumeDownload(); setMenuOpen(false); }}>Resume</button></li>
            </ul>
          </div>
        )}
      </motion.nav>

      {activeCard && <CardOverlay type={activeCard} />}
    </>
  );
};

export default Navbar;
