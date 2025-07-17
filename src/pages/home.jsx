import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Modal from "../components/Modal";
import TagFilter from "../components/TagFilter";

const allProjects = [
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    technologies: [
      "React", "Node.js", "MongoDB Atlas",
      "Axios", "Bootstrap", "Express.js", "Mongoose"
    ],
    image: "food-delivery-app.png", 
    category: "Fullstack",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "real-estate.png",
    category: "Frontend",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    technologies: ["Express", "MongoDB", "Tailwind"],
    image: "/url-shortner-1.png",
    category: "Backend",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio.png",
    category: "Frontend",
  },
];

const animationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: "spring" },
  }),
};

function Home() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [profileClicked, setProfileClicked] = useState(false);

  const filteredProjects =
    filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen px-6 py-16 text-white bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hello, I'm <span className="text-emerald-300">Mayuri</span>
        </h1>
        <p className="text-xl text-yellow-200">
          <Typewriter
            words={["Frontend Developer", "JavaScript Developer", "Creative Coder"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <div className="flex justify-center mt-6">
          <motion.img
            src="/mayu4.jpg"
            alt="Mayuri"
            whileHover={{ scale: 1.1, rotate: 2 }}
            animate={
              profileClicked
                ? {
                    boxShadow: [
                      "0 0 10px #fff",
                      "0 0 20px #ff00ff",
                      "0 0 30px #00ffff",
                      "0 0 20px #ff00ff",
                      "0 0 10px #00ffff",
                    ],
                    transition: { duration: 3, repeat: Infinity },
                  }
                : { boxShadow: "none", scale: 1, rotate: 0 }
            }
            onClick={() => setProfileClicked((prev) => !prev)}
            className="w-35 h-45 sm:w-40 sm:h-40 rounded-2xl shadow-lg cursor-pointer"
          />
        </div>
      </div>

      <TagFilter current={filter} onChange={setFilter} />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white/10 p-5 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-all hover:shadow-emerald-300"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            onClick={() => setSelected(project)}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-emerald-300">{project.title}</h3>
            <p className="text-sm mt-1 text-gray-200">
              {project.technologies.join(" ● ")}
            </p>
          </motion.div>
        ))}
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

export default Home;
