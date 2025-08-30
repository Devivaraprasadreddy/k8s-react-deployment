import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import '../App.css';

const educationList = [
  {
    title: "BACHELORS OF TECHNOLOGY",
    institution: "ADITYA COLLEGE OF ENGINEERING, SURAMPALEM, ANDHRA PRADESH, INDIA",
    year: "2023",
    description: "Graduated with a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE) with a CGPA of 7.36. Developed a strong foundation in electronics, communication systems, and programming concepts, which laid the groundwork for transitioning into the field of DevOps and cloud computing."
  },
  {
    title: "HIGHER SECONDARY EDUCATION",
    institution: "SRI CHAITANYA JR COLLEGE, KAKINADA, ANDHRA PRADESH, INDIA",
    year: "2019",
    description: "Successfully completed secondary school education with a strong academic record, achieving a CGPA of 9.5. Pursued and completed Intermediate education, building a solid foundation in core subjects that supported my transition into higher technical education and a career in technology."
  },
  {
    title: "SECONDARY EDUCATION",
    institution: "ZILLA PARISHAD HIGH SCHOOL, MULAPETA, ANDHRA PRADESH, INDIA",
    year: "2017",
    description: "Successfully completed secondary school education with a strong academic performance, graduating with a CGPA of 9.3. This achievement reflects a solid foundation in core subjects and discipline, which supported my further education and interest in the technology domain."
  }
];

export default function Educations() {
  return (
    <motion.section
      id="education"
      className="container education-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Education</h2>
      <div className="row justify-content-center">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="col-md-5 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="education-card p-4 text-start h-100">
              <h5 className="fw-bold d-flex align-items-center">
                <FaGraduationCap className="me-2 text-warning" />
                {edu.title}
              </h5>
              <h6 className="text-light fst-italic">{edu.institution}</h6>
              <p className="mb-1">
                <small className="text-muted fst-italic">{edu.year}</small>
              </p>
              <p className="education-desc mt-2">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
