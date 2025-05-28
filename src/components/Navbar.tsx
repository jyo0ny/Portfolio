import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav className="w-full fixed top-0 z-50 bg-white backdrop-blur-md shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-6 py-6">
        {/* 로고 */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="text-3xl font-bold text-gray-800">
            Jiyoon's page
          </Link>
        </motion.div>

        {/* 네비게이션 메뉴 */}
        <motion.div className="flex items-center">
          {[
            { to: "/", label: "HOME" },
            { to: "/about", label: "ABOUT" },
            { to: "/projects", label: "PROJECT" },
            { to: "/contact", label: "CONTACT" },
          ].map(({ to, label }) => (
            <motion.div
              key={to}
              whileHover={{ scale: 1.1 }}
              className="relative"
              style={{ marginRight: label !== "CONTACT" ? "2rem" : 0 }}
            >
              <Link
                to={to}
                className={`px-4 py-2 font-semibold transition-all duration-300 rounded-lg ${
                  location.pathname === to
                    ? "text-blue-600 bg-blue-50 font-bold"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
