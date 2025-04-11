"use client";

const Footer = () => {
  return (
    <footer className="relative text-gray-300 text-center py-4 mt-1">
      {/* Frosted Glass Background */}
      <div className="absolute inset-0 bg-gray-100/10 backdrop-blur-2xl shadow-lg border-t border-white/20 rounded-t-2xl" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <p className="hover:text-white transition duration-300 relative z-10">
          © {new Date().getFullYear()} Vishnu Dixit.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
