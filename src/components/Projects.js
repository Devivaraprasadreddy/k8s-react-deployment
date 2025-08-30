import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projectList = [
  {
    title: 'Automated Deployment Pipeline',
    duration: 'Feb 2025 – May 2025',
    company: 'Emexo Technologies',
    description:
      'Built a comprehensive CI/CD pipeline using the GitOps methodology, integrating automated testing, Docker-based containerization, and Kubernetes deployment on AWS cloud infrastructure. This setup ensured reliable, secure, and repeatable software delivery across multiple environments with minimal manual intervention.',
    responsibilities:
      'Set up and managed CI/CD pipelines using Jenkins and GitHub Actions. Containerized applications using Docker for consistency across environments. Deployed applications to Kubernetes clusters for easy scaling and management. Followed GitOps practices to deploy apps automatically from Git repositories. Used Terraform to create and manage AWS infrastructure like EC2, S3, and EKS. Added automated testing steps in the pipeline to catch bugs early. Made sure deployments were secure and efficient. Monitored system and pipeline performance to catch issues quickly. Automated repetitive tasks to save time and reduce manual errors.'
  },
  {
    title: 'Kubernetes Deployment with ArgoCD',
    duration: 'July 2024 – Nov 2024',
    company: 'Emexo Technologies',
    description:
      'Implemented a GitOps workflow using ArgoCD for continuous and automated deployment of applications to Kubernetes. Used Helm charts for application packaging and versioning, and enabled automated rollback features to ensure stability and quick recovery from failed deployments.',
    responsibilities:
      'Set up and configured ArgoCD for continuous deployment using GitOps principles. Used Helm charts to manage Kubernetes application configurations and releases. Connected Git repositories with ArgoCD for automatic syncing and deployment. Enabled automated rollbacks in case of failed deployments or errors. Maintained version control for deployments using Git commits and pull requests.  Ensured smooth deployment processes with minimal downtime. Monitored deployment status and logs directly through the ArgoCD UI. Worked with Kubernetes manifests and Helm templates to define app behavior.' 
  },
  {
    title: 'Java Microservice CI/CD with Jenkins & AWS ECR',
    duration: 'Mar 2024 – Jun 2024',
    company: 'Emexo Technologies',
    description:
      'Built a CI/CD pipeline for a Java-based microservice using Jenkins for continuous integration and AWS ECR (Elastic Container Registry) for storing Docker images. The pipeline automated code building, testing, containerization, and deployment to AWS infrastructure, enabling faster and more reliable releases.',
    responsibilities:
      'Configured Jenkins pipelines for building and testing the Java microservice. Created a Dockerfile to containerize the Java application. Built and pushed Docker images to AWS ECR securely. Automated the CI/CD process from code commit to deployment. Integrated unit testing stages in the Jenkins pipeline to ensure code quality. Managed AWS IAM roles and credentials for secure access to ECR. Used webhooks or polling to trigger builds on GitHub code changes. Monitored build status and deployment logs through Jenkins.'
  },
   {
    title: 'S3 Static Website Hosting with Custom Domain',
    duration: 'Mar 2024 – Jun 2024',
    company: 'Emexo Technologies',
    description:
      'Configured AWS S3 for static website hosting, integrated with CloudFront CDN for faster global content delivery. Set up a custom domain using Route 53 and managed SSL certificates with AWS Certificate Manager (ACM) to ensure secure and optimized web access.',
    responsibilities:
      'Hosted a static website by uploading files to an S3 bucket, enabling static website hosting settings and configuring appropriate bucket policies for public access. Integrated CloudFront as a CDN to enhance global performance and availability, and set up a custom domain using Amazon Route 53. Managed and applied SSL certificates via AWS Certificate Manager (ACM) to enable secure HTTPS access. Implemented redirect rules and custom error pages to improve user experience, ensured security through S3 and CloudFront configuration, and performed thorough end-to-end testing to validate domain redirection and SSL setup.'
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="container-fluid projects-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Projects</h2>
      <div className="row justify-content-center px-3">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="project-card p-4 text-start w-100 bg-dark bg-opacity-75 border border-light-subtle rounded-4 shadow-lg">
              <h4 className="project-title text-info mb-2">{project.title}</h4>
              <p className="text-muted mb-1">
                <small>{project.company} • {project.duration}</small>
              </p>
              <p className="project-desc mb-2 text-light">{project.description}</p>
              <p className="project-responsibilities text-white-50">
                <strong>Responsibilities:</strong> {project.responsibilities}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
