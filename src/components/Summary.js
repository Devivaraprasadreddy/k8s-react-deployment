import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Summary() {
  return (
    <motion.section
      id="summary"
      className="container summary-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Summary</h2>
      <p className="summary-text lead">
        Through comprehensive training at Emexo Technologies and hands-on internship experience, I've developed expertise in containerization, CI/CD pipelines, cloud platforms, and infrastructure automation. I believe in continuous learning and staying updated with the latest industry trends.
      </p>
    </motion.section>
  );
}

export default Summary;
