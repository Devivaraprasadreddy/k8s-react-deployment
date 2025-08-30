import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import '../App.css';

const certifications = [
  {
    title: "DevOps",
    issuer: "Emexo Technologies",
    year: "2024",
    description:
      "Successfully completed a DevOps training and certification program from Emexo Technologies, covering essential DevOps tools and practices such as Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, AWS, and CI/CD pipeline automation. The program included hands-on projects, real-time scenarios, and guided labs focused on building and managing infrastructure, automating deployments, and implementing end-to-end DevOps workflows. This certification enhanced my practical knowledge and prepared me for real-world DevOps roles and responsibilities."
  },
  {
    title: "Python (Basics)",
    issuer: "HackerRank",
    year: "2022",
    description:
      "Earned the Python (Basic) certification from HackerRank, demonstrating proficiency in core Python concepts such as data types, control structures, functions, loops, and basic problem-solving. This certification validates my ability to write clean, logical Python code and solve coding challenges effectively, laying a strong foundation for scripting and automation tasks in DevOps and cloud environments."
  },
];

function Certification() {
  return (
    <motion.section
      id="certification"
      className="container certification-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Certifications</h2>
      <div className="row justify-content-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="cert-card p-4 text-start h-100">
              <h5 className="fw-bold d-flex align-items-center">
                <FaCertificate className="me-2 text-info cert-icon" />
                {cert.title}
              </h5>
              <h6 className="text-light fst-italic">{cert.issuer}</h6>
              <p className="mb-1">
                <small className="text-muted fst-italic">{cert.year}</small>
              </p>
              <p className="cert-desc mt-2">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certification;