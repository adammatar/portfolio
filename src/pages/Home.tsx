import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Section, Button } from '../styles/components';
import AnimatedText from '../components/AnimatedText';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { FolderIcon, EnvelopeIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CloudIcon,
  CpuChipIcon,
  CommandLineIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';
import { StarIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/solid';

const HeroSection = styled(Section)`
  padding-top: 5rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ProfileImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.2), 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    
    img {
      transform: scale(1.1);
    }
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 250px;
    height: 250px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.75rem;
  }
`;

const NameSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.875rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 42rem;
  margin: 0 auto 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MainButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const DownloadButton = styled(Button)`
  width: 100%;
  max-width: 300px;
`;

const ScrollSection = styled(motion.div)`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.background}00,
    ${({ theme }) => theme.colors.backgroundLight}22
  );
`;

const ScrollIndicator = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textLight};
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.backgroundLight}22;
  backdrop-filter: blur(8px);
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(4px);
    background-color: ${({ theme }) => theme.colors.primary}11;
  }
  
  span {
    font-size: 1rem;
    font-weight: 500;
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const SkillsSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  position: relative;
  overflow: hidden;
`;

const SkillsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillsGrid = styled(motion.div)`
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

const SkillIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.primary}11;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

const TechnologyTag = styled.span`
  padding: 0.375rem 0.875rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SkillCard = styled(motion.div)`
  padding: 2.5rem 2rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative;
  overflow: visible;
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: ${({ theme }) => theme.colors.primary}33;
    
    ${SkillIcon} {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
    }
    
    ${TechnologyTag} {
      background-color: ${({ theme }) => theme.colors.primary}22;
    }
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const SkillProgress = styled.div`
  margin: 2rem 0;
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ProgressBar = styled.div<{ level: number }>`
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  margin-bottom: 0.5rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({ level }) => level}%;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: ${({ theme }) => theme.radii.full};
    transition: width 0.5s ease;
  }
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.5rem;
  
  span:last-child {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TechnologyTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const SkillBadge = styled.div`
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  ${SkillCard}:hover & {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Home = () => {
  const skills = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
      icon: <CodeBracketIcon />,
      level: 90,
      technologies: ['React', 'TypeScript', 'Next.js', 'Styled Components', 'TailwindCSS', 'Redux'],
      badge: 'Expert'
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express, and various databases.',
      icon: <ServerIcon />,
      level: 85,
      technologies: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'MongoDB'],
      badge: 'Advanced'
    },
    {
      title: 'DevOps & Cloud',
      description: 'Setting up CI/CD pipelines, containerization, and cloud infrastructure for scalable applications.',
      icon: <CloudIcon />,
      level: 80,
      technologies: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Kubernetes', 'Terraform'],
      badge: 'Advanced'
    },
    {
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications with React Native and native technologies.',
      icon: <CpuChipIcon />,
      level: 75,
      technologies: ['React Native', 'iOS', 'Android', 'Expo', 'Redux', 'Firebase'],
      badge: 'Intermediate'
    },
    {
      title: 'Testing & Quality',
      description: 'Ensuring code quality and reliability through comprehensive testing strategies.',
      icon: <CommandLineIcon />,
      level: 85,
      technologies: ['Jest', 'React Testing Library', 'Cypress', 'Unit Testing', 'E2E Testing', 'TDD'],
      badge: 'Advanced'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences with modern design principles.',
      icon: <PaintBrushIcon />,
      level: 70,
      technologies: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      badge: 'Intermediate'
    }
  ];

  const handleScroll = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/profile.jpg" alt="Adam Matar" />
          </ProfileImage>
          <Title>
            <AnimatedText text="Hi, I'm " />
            <NameSpan>
              <AnimatedText text="Adam Matar" delay={0.5} />
            </NameSpan>
          </Title>
          <Subtitle>Full Stack Developer</Subtitle>
          <Description>
            I build exceptional digital experiences with modern technologies.
            Let's create something amazing together.
          </Description>
          <ButtonGroup>
            <MainButtons>
              <Button as={Link} to="/projects" variant="primary">
                <FolderIcon style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
                View My Work
              </Button>
              <Button as={Link} to="/contact" variant="primary">
                <EnvelopeIcon style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
                Contact Me
              </Button>
            </MainButtons>
            <DownloadButton
              as="a"
              href="/cv.pdf"
              download
              variant="outline"
              style={{ textDecoration: 'none' }}
            >
              <DocumentArrowDownIcon style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
              Download CV
            </DownloadButton>
          </ButtonGroup>
              <ScrollSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ScrollIndicator onClick={handleScroll}>
          <span>Explore My Expertise</span>
          <ArrowDownIcon />
        </ScrollIndicator>
      </ScrollSection>
        </HeroContent>
      </HeroSection>

  

      <SkillsSection id="skills">
        <Container>
          <SkillsTitle>My Expertise</SkillsTitle>
          <SkillsGrid
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <SkillBadge>
                  {skill.badge === 'Expert' ? (
                    <SparklesIcon />
                  ) : skill.badge === 'Advanced' ? (
                    <TrophyIcon />
                  ) : (
                    <StarIcon />
                  )}
                  {skill.badge}
                </SkillBadge>
                <SkillHeader>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillTitle>{skill.title}</SkillTitle>
                </SkillHeader>
                <SkillDescription>{skill.description}</SkillDescription>
                <SkillProgress>
                  <ProgressLabel>
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </ProgressLabel>
                  <ProgressBar level={skill.level} />
                </SkillProgress>
                <TechnologyTags>
                  {skill.technologies.map((tech) => (
                    <TechnologyTag key={tech}>{tech}</TechnologyTag>
                  ))}
                </TechnologyTags>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Container>
      </SkillsSection>
    </div>
  );
};

export default Home; 