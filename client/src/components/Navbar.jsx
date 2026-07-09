import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="navbar"
        style={{
  position: "fixed",
  top: "16px",
  left: "16px",
  right: "16px",

  zIndex: 1000,

  background: scrolled ? "#fff" : "rgba(250,247,240,0.92)",
  backdropFilter: "blur(12px)",

  border: "3px solid #0A0A0A",
  borderRadius: "50px",

  padding: "12px 24px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  boxSizing: "border-box"
}}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#0A0A0A",
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          Anshika<span style={{ color: "#6B6B6B" }}>.</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "#0A0A0A",
                fontWeight: 500,
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <a href="#contact" className="btn hire-btn">
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className=" btn mobile-hire-btn"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-links {
          display: flex;
          gap: 24px;
        }

        .hire-btn {
          text-decoration: none;
          background: #C5F932;
          color: black;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
        }

        .menu-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #0A0A0A;
        }

        .mobile-menu {
          position: fixed;
          top: 90px;

          left: 16px;
          right: 16px;

          width: auto;
          max-width: none;

          background: white;
          border: 3px solid #0A0A0A;
          border-radius: 24px;
          padding: 20px;

          z-index: 999;

          display: flex;
          flex-direction: column;
          gap: 18px;

          box-sizing: border-box;
        }

        .mobile-menu a {
          text-decoration: none;
          color: #0A0A0A;
          font-weight: 600;
        }

        .mobile-hire-btn {
          background: #C5F932;
          color: black !important;
          padding: 12px 16px;
          border-radius: 999px;
        }

        @media (max-width: 768px) {
        
          .nav-links {
            display: none;
          }

          .hire-btn {
            display: none;
          }

          .menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .navbar {
            padding: 12px 18px !important;
          }
        }
      `}</style>
    </>
  );
}