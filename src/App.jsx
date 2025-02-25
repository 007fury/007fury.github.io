import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard.jsx';
import SkillTag from './components/SkillTag.jsx';
import './index.css';

function App() {
  const [projects] = useState([
    { id: 1, title: "Sales Dashboard", desc: "Interactive dashboard with Python & Tableau", img: "project1.jpg", link: "https://github.com/007fury/sales-dashboard" },
    { id: 2, title: "Customer Segmentation", desc: "Clustering analysis in Python", img: "project2.jpg", link: "https://github.com/007fury/customer-segmentation" },
  ]);

  const skills = ["Python", "SQL", "Tableau", "Machine Learning", "Data Visualization", "Pandas", "Git", "Excel"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-900 text-white py-10 text-center"
      >
        <motion.img
          src="/src/assets/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <h1 className="text-4xl font-bold">pyPrit</h1>
        <p className="text-lg mt-2">[Your Full Name] | Aspiring Data Scientist</p>
        <p className="text-sm">[your.email@example.com]</p>
      </motion.header>

      {/* About */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto py-10 px-6"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">About Me</h2>
        <p className="text-gray-700">
          I’m a data science enthusiast skilled in transforming raw data into actionable insights. My projects showcase analytics, visualization, and problem-solving—perfect for a data-driven career!
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto py-10 px-6 bg-white"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">Data Science Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto py-10 px-6"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto py-10 px-6 bg-white"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">Experience</h2>
        <div>
          <h3 className="text-xl font-medium">Data Analyst Intern - [Company]</h3>
          <p className="text-gray-600">[Month Year] - [Month Year]</p>
          <p className="text-gray-700">Analyzed sales data and built dashboards.</p>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto py-10 px-6"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-medium">[B.Sc. Data Science] - [University]</h3>
          <p className="text-gray-600">[Year] - [Year]</p>
        </div>
      </motion.section>

      {/* CV Download */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto py-10 px-6 text-center"
      >
        <a href="/cv.pdf" download className="bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition">
          Download CV
        </a>
      </motion.section>

      {/* Contact */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-900 text-white py-10 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p>Name: [Your Full Name]</p>
        <p>Mobile: [Your Mobile Number]</p>
        <p>Email: <a href="mailto:your.email@example.com" className="underline">[your.email@example.com]</a></p>
        <p>For: Data Science Roles & Projects</p>
      </motion.footer>
    </div>
  );
}

export default App;