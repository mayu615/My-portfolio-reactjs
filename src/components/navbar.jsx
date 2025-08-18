import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <motion.img
              whileHover={{ rotateY: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              src="/M-logo.png"
              alt="logo"
              className="h-8 w-8 rounded-full shadow-md"
            />
            <div className="hidden sm:flex space-x-4">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white bg-gray-800 dark:bg-white dark:text-black"
                        : "text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="rounded px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </motion.button>

            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/mayu4.jpg"
              alt="profile"
              className="size-8 rounded-full border shadow"
            />

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-800 dark:text-white"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white dark:bg-gray-900 px-4 py-2 space-y-2"
          >
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-gray-800 text-white dark:bg-white dark:text-black"
                      : "text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
