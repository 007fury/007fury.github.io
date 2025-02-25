import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 rounded-lg shadow-md"
    >
      <img src={`/src/assets/${project.img}`} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
      <h3 className="text-xl font-medium">{project.title}</h3>
      <p className="text-gray-600">{project.desc}</p>
      <a href={project.link} target="_blank" className="text-blue-500 mt-2 inline-block">View Project</a>
    </motion.div>
  );
}

export default ProjectCard;