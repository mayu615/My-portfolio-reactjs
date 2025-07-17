import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const projectData = [
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    description:
      "A full-stack food ordering application with authentication, cart management, and order tracking.",
    technologies: [
      "React", "Node.js", "MongoDB Atlas",
      "Axios","Bootstrap", "Express.js", "Mongoose"
    ],
    image: "food-delivery-app.png",
    github: "https://github.com/mayu615/food-delivery-app",
    live: "https://food-delivery-frontend-nmgj.onrender.com", 
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "A modern real estate listing site with filters and map support.",
    technologies: ["React.js", "Redux", "Tailwind CSS"],
    image: "real-estate.png",
    github: "https://github.com/mayu615/Real-Estate-project",
    live: "https://real-estate-js.netlify.app/",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A personal portfolio built using React and Vite.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    image: "portfolio.png",
    github: "https://github.com/mayu615/html-css-portfolio",
    live: "https://portfolio-proje-html-css.netlify.app/",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description: "A simple URL shortener using Express and MongoDB.",
    technologies: ["Express", "MongoDB", "JavaScript"],
    image: "url-shortener.png",
    github: "https://github.com/mayu615/URL-Shortner",
    live: "https://url-shortener-0fmr.onrender.com",
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-10 text-center text-xl font-bold text-red-600">
        Project not found
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
          {project.title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">{project.description}</p>
        <p className="text-md font-medium text-yellow-700 dark:text-yellow-300">
          {project.technologies.join(" ● ")}
        </p>
        <div className="flex gap-4 mt-6 flex-wrap">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            GitHub
          </a>
        </div>
        <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </motion.section>
  );
}

export default ProjectDetails;
