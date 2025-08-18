import { motion } from "framer-motion";

function Modal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-lg w-full relative transition-all duration-300"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="rounded mb-4 shadow-md dark:shadow-gray-950"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h2>
        <p className="text-gray-700 dark:text-yellow-300 font-medium mb-4">
          Tech Stack: {project.technologies?.join(", ")}
        </p>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
