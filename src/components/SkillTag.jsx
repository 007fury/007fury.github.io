import { motion } from 'framer-motion';

function SkillTag({ skill }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full"
    >
      {skill}
    </motion.span>
  );
}

export default SkillTag;