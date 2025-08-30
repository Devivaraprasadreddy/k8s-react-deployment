import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import '../App.css';

const experiences = [
  {
    role: 'DevOps Engineer Intern',
    company: 'The Coding Cult',
    duration: 'Novemeber 2024 - May 2025',
    description:
      'I have hands-on experience in building and optimizing CI/CD pipelines using Jenkins and GitHub Actions, enabling automated build, test, and deployment workflows for faster and more reliable software delivery. I have containerized applications using Docker to ensure consistency across environments and orchestrated deployments using Kubernetes, effectively managing scalability, high availability, and rolling updates. Additionally, I have provisioned and managed AWS infrastructure using Terraform, following Infrastructure as Code (IaC) best practices to ensure version control and reproducibility of cloud resources. I’ve also implemented monitoring and alerting solutions to track system health and performance, while continuously improving deployment automation to minimize manual intervention and reduce deployment errors.'
  },
  {
    role: 'Tech Support & Career Guidance Executive',
    company: 'Adhoc Network Tech Company.',
    duration: 'October 2024 - March 2025',
    description:
      'I have experience delivering in-depth seminars and training sessions on emerging technologies, industry trends, and various career paths in IT, with a strong focus on DevOps and cloud computing. I’ve provided personalized career guidance to students and working professionals, helping them choose suitable learning paths and technologies aligned with their goals. As part of my role, I also handled technical support queries, successfully resolving complex issues related to tools, platforms, and deployment processes. Additionally, I have coordinated and organized technical workshops, managing event schedules, content planning, and participant engagement. Through one-on-one and group mentoring, I’ve helped many individuals transition into DevOps and cloud-related roles, sharing hands-on insights and real-world project experience to support their career growth.'
  }
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience-section section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container text-center">
        <h2 className="section-title mb-5">Experience</h2>
        <div className="row justify-content-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="col-md-5 mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              <div className="experience-card p-4 h-100 text-start">
                <div className="icon-wrapper mb-3">
                  <FaBriefcase className="experience-icon" />
                </div>
                <h5 className="experience-role">{exp.role}</h5>
                <h6 className="experience-company">{exp.company}</h6>
                <p className="experience-duration">{exp.duration}</p>
                <p className="experience-desc">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
