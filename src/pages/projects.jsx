import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery App",
      description:
        "React + Node.js + MongoDB Atlas + JWT, bcryptjs, Axios, Express, Mongoose",
      live: "https://food-delivery-frontend-nmgj.onrender.com",
      github: "https://github.com/mayu615/food-delivery-app",
    },
    {
      title: "Real Estate Website",
      description: "HTML, CSS, JS + Interactive Map + Filters",
      live: "https://real-estate-js.netlify.app/",
      github: "https://github.com/mayu615/Real-Estate-project",
    },
    {
      title: "Portfolio Website",
      description: "Built using React + Vite + Tailwind CSS",
      live: "https://portfolio-proje-html-css.netlify.app/",
      github: "https://github.com/mayu615/html-css-portfolio",
    },
    {
      title: "URL Shortener",
      description: "Express + MongoDB + QR Code + REST API",
      live: "https://url-shortener-0fmr.onrender.com",
      github: "https://github.com/mayu615/URL-Shortner",
    },
  ];

  return (
    <motion.section
      className="relative min-h-screen px-6 py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg-img.jpeg')",
      }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-brightness-75 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-pink-400 mb-10">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-md border border-purple-200 dark:border-gray-700 rounded-2xl shadow-xl p-6 transition-all duration-300 group overflow-hidden hover:shadow-pink-300"
              variants={projectVariants}
              custom={index}
              whileHover={{ rotateY: 8, rotateX: 3, scale: 1.03 }}
              style={{ perspective: 1000 }}
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 to-purple-300/30 dark:from-purple-700/30 dark:to-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              <div className="bg-white dark:bg-darkBg text-gray-800 dark:text-gray-200 p-4 rounded-xl shadow">
                <h3 className="text-xl font-bold text-purple-800 dark:text-pink-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex items-center gap-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 dark:text-indigo-300 font-semibold hover:underline"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 hover:text-emerald-400 transition-colors"
                  >
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
