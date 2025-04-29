import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Container, Section } from '../styles/components';
import { 
  ArrowTopRightOnSquareIcon,
  StarIcon,
  EyeIcon,
  CommandLineIcon,
  ServerIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiStyledcomponents, SiFirebase, SiMongodb, SiExpress, SiRedux, SiKubernetes, SiTerraform } from 'react-icons/si';

const ProjectsSection = styled(Section)`
  padding-top: 5rem;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled(motion.div)`
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
`;

const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background-color: ${({ theme, active }) => 
    active ? theme.colors.primary : theme.colors.backgroundLight};
  color: ${({ theme, active }) => 
    active ? theme.colors.background : theme.colors.textLight};
  border: 1px solid ${({ theme, active }) => 
    active ? theme.colors.primary : theme.colors.border};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${({ theme, active }) => 
      active ? theme.colors.primary : theme.colors.backgroundLight};
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectImage = styled.div`
  height: 12rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  transition: transform 0.5s ease;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: ${({ theme }) => theme.colors.primary}33;
    
    ${ProjectImage} {
      transform: scale(1.05);
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1rem 0;
`;

const TechnologyTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary}1a;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.primary}33;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    svg {
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
`;

const GitHubLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}1a;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const DemoButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}cc;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const getTechnologyIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react':
      return <FaReact />;
    case 'typescript':
      return <SiTypescript />;
    case 'styled components':
      return <SiStyledcomponents />;
    case 'node.js':
      return <FaNodeJs />;
    case 'mongodb':
      return <SiMongodb />;
    case 'express':
      return <SiExpress />;
    case 'firebase':
      return <SiFirebase />;
    case 'redux':
      return <SiRedux />;
    case 'docker':
      return <FaDocker />;
    case 'kubernetes':
      return <SiKubernetes />;
    case 'aws':
      return <FaAws />;
    case 'terraform':
      return <SiTerraform />;
    default:
      return <CommandLineIcon />;
  }
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Styled Components. Features dark mode, animations, and a clean design.',
      technologies: ['React', 'TypeScript', 'Styled Components', 'Framer Motion'],
      image: 'https://miro.medium.com/v2/resize:fit:1280/format:webp/1*XthWUtD_NU-VJ7ESA2qX3A.jpeg',
      github: 'https://github.com/adammatar/portfolio',
      demo: null,
      category: 'frontend',
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, and payment integration using Stripe.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      image: 'https://miro.medium.com/v2/resize:fit:1280/format:webp/1*XthWUtD_NU-VJ7ESA2qX3A.jpeg',
      github: 'https://github.com/adammatar/ecommerce',
      demo: 'https://ecommerce-demo.com',
      category: 'fullstack',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using Firebase and team features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      image: 'https://miro.medium.com/v2/resize:fit:1280/format:webp/1*XthWUtD_NU-VJ7ESA2qX3A.jpeg',
      github: 'https://github.com/adammatar/task-manager',
      demo: null,
      category: 'frontend',
    },
    {
      title: 'API Gateway',
      description: 'A scalable API gateway service with rate limiting, authentication, and monitoring capabilities.',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes'],
      image: 'https://miro.medium.com/v2/resize:fit:1280/format:webp/1*XthWUtD_NU-VJ7ESA2qX3A.jpeg',
      github: 'https://github.com/adammatar/api-gateway',
      demo: 'https://api-gateway-demo.com',
      category: 'backend',
    },
    {
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile application for fitness tracking and workout planning built with React Native.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      image: 'https://miro.medium.com/v2/resize:fit:1280/format:webp/1*XthWUtD_NU-VJ7ESA2qX3A.jpeg',
      github: 'https://github.com/adammatar/fitness-app',
      demo: null,
      category: 'mobile',
    },
    {
      title: 'DevOps Pipeline',
      description: 'An automated CI/CD pipeline for deploying applications to AWS using Docker and Kubernetes.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Terraform'],
      image: 'https://miro.medium.com/v2/resize:fit:1280/format:webp/1*XthWUtD_NU-VJ7ESA2qX3A.jpeg',
      github: 'https://github.com/adammatar/devops-pipeline',
      demo: 'https://devops-demo.com',
      category: 'devops',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <StarIcon /> },
    { id: 'frontend', name: 'Frontend', icon: <CommandLineIcon /> },
    { id: 'backend', name: 'Backend', icon: <ServerIcon /> },
    { id: 'fullstack', name: 'Full Stack', icon: <CommandLineIcon /> },
    { id: 'mobile', name: 'Mobile', icon: <CpuChipIcon /> },
    { id: 'devops', name: 'DevOps', icon: <ArrowTopRightOnSquareIcon /> },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <ProjectsSection>
      <Container>
        <ContentWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>My Projects</Title>
          
          <FilterButtons>
            {categories.map((category) => (
              <FilterButton
                key={category.id}
                onClick={() => setFilter(category.id)}
                active={filter === category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                {category.name}
              </FilterButton>
            ))}
          </FilterButtons>

          <ProjectsGrid ref={projectsRef}>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechnologiesList>
                    {project.technologies.map((tech, techIndex) => (
                      <TechnologyTag
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ 
                          duration: 0.5,
                          delay: 0.2 + index * 0.1 + techIndex * 0.05,
                          ease: [0.6, -0.05, 0.01, 0.99]
                        }}
                      >
                        {getTechnologyIcon(tech)}
                        {tech}
                      </TechnologyTag>
                    ))}
                  </TechnologiesList>
                  <ProjectLinks>
                    <GitHubLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                    >
                      <FaGithub />
                      View on GitHub
                    </GitHubLink>
                    {project.demo && (
                      <DemoButton
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <EyeIcon />
                        Live Demo
                      </DemoButton>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ContentWrapper>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 