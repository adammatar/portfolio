import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import { Container, Section } from '../styles/components';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CloudIcon,
  CpuChipIcon,
  CommandLineIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const AboutSection = styled(Section)`
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

const Grid = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: ${({ theme }) => theme.colors.primary}33;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const CardContent = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
`;

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SkillGroup = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: ${({ theme }) => theme.colors.primary}33;
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary}1a;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
  }
`;

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: <CodeBracketIcon />,
      items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Styled Components', 'TailwindCSS', 'Redux'],
    },
    {
      category: 'Backend Development',
      icon: <ServerIcon />,
      items: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'DevOps & Cloud',
      icon: <CloudIcon />,
      items: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Kubernetes', 'Terraform'],
    },
    {
      category: 'Mobile Development',
      icon: <CpuChipIcon />,
      items: ['React Native', 'iOS', 'Android', 'Expo', 'Redux', 'Firebase'],
    },
  ];

  // Create refs for each animated section
  const titleRef = useRef(null);
  const journeyRef = useRef(null);
  const drivesRef = useRef(null);
  const learningRef = useRef(null);
  const skillsRef = useRef(null);

  // Use useInView hook for each section
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const journeyInView = useInView(journeyRef, { once: true, margin: "-100px" });
  const drivesInView = useInView(drivesRef, { once: true, margin: "-100px" });
  const learningInView = useInView(learningRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  return (
    <AboutSection>
      <Container>
        <ContentWrapper>
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <Title>About Me</Title>
          </motion.div>
          
          <Grid>
            <TextContent>
              <motion.div
                ref={journeyRef}
                initial={{ opacity: 0, x: -50 }}
                animate={journeyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                <AboutCard>
                  <CardHeader>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={journeyInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ 
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                    >
                      <RocketLaunchIcon />
                    </motion.div>
                    <CardTitle>My Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    I'm a passionate Full Stack Developer with over 5 years of experience in building modern web applications. 
                    My journey began with a deep curiosity about technology and how things work behind the scenes. 
                    This curiosity has evolved into a strong expertise in both frontend and backend technologies, 
                    allowing me to create comprehensive solutions that make a real impact.
                  </CardContent>
                </AboutCard>
              </motion.div>

              <motion.div
                ref={drivesRef}
                initial={{ opacity: 0, x: -50 }}
                animate={drivesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                <AboutCard>
                  <CardHeader>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={drivesInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ 
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                    >
                      <LightBulbIcon />
                    </motion.div>
                    <CardTitle>What Drives Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    I'm passionate about creating exceptional user experiences and writing clean, maintainable code. 
                    I believe in the power of technology to solve real-world problems and improve people's lives. 
                    My approach combines technical expertise with a strong focus on user-centered design and best practices.
                  </CardContent>
                </AboutCard>
              </motion.div>

              <motion.div
                ref={learningRef}
                initial={{ opacity: 0, x: -50 }}
                animate={learningInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                <AboutCard>
                  <CardHeader>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={learningInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ 
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                    >
                      <AcademicCapIcon />
                    </motion.div>
                    <CardTitle>Continuous Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    I'm committed to continuous learning and staying up-to-date with the latest technologies and best practices. 
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community through blog posts and technical discussions.
                  </CardContent>
                </AboutCard>
              </motion.div>
            </TextContent>
            
            <SkillsContent ref={skillsRef}>
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: 50 }}
                  animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.2 + index * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                >
                  <SkillGroup>
                    <h3>
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        animate={skillsInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                        transition={{ 
                          duration: 0.8,
                          delay: 0.4 + index * 0.1,
                          ease: [0.6, -0.05, 0.01, 0.99]
                        }}
                      >
                        {skillGroup.icon}
                      </motion.div>
                      {skillGroup.category}
                    </h3>
                    <SkillsList>
                      {skillGroup.items.map((skill, skillIndex) => (
                        <SkillTag
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ 
                            duration: 0.5,
                            delay: 0.6 + index * 0.1 + skillIndex * 0.05,
                            ease: [0.6, -0.05, 0.01, 0.99]
                          }}
                        >
                          {skill}
                        </SkillTag>
                      ))}
                    </SkillsList>
                  </SkillGroup>
                </motion.div>
              ))}
            </SkillsContent>
          </Grid>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About; 