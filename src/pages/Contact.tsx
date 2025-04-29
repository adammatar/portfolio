import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Container, Section, Button } from '../styles/components';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../components/Icons';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = styled(Section)`
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
  gap: 3rem;
  grid-template-columns: 1fr;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  p {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const InfoSection = styled(motion.div)`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.primary}33;
  }
`;

const InfoTitle = styled.h3`
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
`;

const EmailLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary}cc;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textLight};
  transition: all 0.3s ease;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary}1a;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight}80;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 8rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight}80;
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.success}1a;
  color: ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.success};
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const ErrorMessage = styled(motion.div)`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.error}1a;
  color: ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.error};
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubmitButton = styled(motion.button)<{ isLoading: boolean }>`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
  background-color: ${({ theme, isLoading }) => 
    isLoading ? `${theme.colors.primary}80` : theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: ${({ isLoading }) => isLoading ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    animation: ${({ isLoading }) => isLoading ? 'spin 1s linear infinite' : 'none'};
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  &:hover {
    transform: ${({ isLoading }) => isLoading ? 'none' : 'translateY(-2px)'};
    box-shadow: ${({ isLoading }) => isLoading ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)'};
    background-color: ${({ theme, isLoading }) => 
      isLoading ? `${theme.colors.primary}80` : `${theme.colors.primary}cc`};
  }
`;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GithubIcon />,
      url: 'https://github.com/adammatar',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com/in/adammatar',
    },
  ];

  return (
    <ContactSection>
      <Container>
        <ContentWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Get in Touch</Title>
          
          <Grid ref={contactRef}>
            <ContactInfo>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                through the contact form or connect with me on social media.
              </p>
              
              <InfoSection
                initial={{ opacity: 0, x: -20 }}
                animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <InfoTitle>
                  <EnvelopeIcon />
                  Email
                </InfoTitle>
                <EmailLink href="mailto:mataradam@gmail.com">
                  mataradam@gmail.com
                </EmailLink>
              </InfoSection>
              
              <InfoSection
                initial={{ opacity: 0, x: -20 }}
                animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <InfoTitle>
                  <PhoneIcon />
                  Phone
                </InfoTitle>
                <EmailLink href="tel:+972503346366">
                  +972 50 334 6366
                </EmailLink>
              </InfoSection>
              
              <InfoSection
                initial={{ opacity: 0, x: -20 }}
                animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <InfoTitle>
                  <MapPinIcon />
                  Location
                </InfoTitle>
                <p>Kfar Saba, Israel</p>
              </InfoSection>
              
              <InfoSection
                initial={{ opacity: 0, x: -20 }}
                animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <InfoTitle>Connect</InfoTitle>
                <SocialLinks>
                  {socialLinks.map((link, index) => (
                    <SocialLink
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </SocialLink>
                  ))}
                </SocialLinks>
              </InfoSection>
            </ContactInfo>
            
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup
                initial={{ opacity: 0, x: 20 }}
                animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </FormGroup>
              
              <FormGroup
                initial={{ opacity: 0, x: 20 }}
                animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </FormGroup>
              
              <FormGroup
                initial={{ opacity: 0, x: 20 }}
                animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  placeholder="Your message..."
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && (
                  <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
              </FormGroup>
              
              <SubmitButton
                type="submit"
                isLoading={isLoading}
                initial={{ opacity: 0, y: 20 }}
                animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                <PaperAirplaneIcon />
                {isLoading ? 'Sending...' : 'Send Message'}
              </SubmitButton>

              {isSuccess && (
                <SuccessMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <PaperAirplaneIcon />
                  Message sent successfully!
                </SuccessMessage>
              )}

              {error && (
                <ErrorMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {error}
                </ErrorMessage>
              )}
            </Form>
          </Grid>
        </ContentWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact; 