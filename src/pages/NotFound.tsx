import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/components';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled(motion.div)`
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <ContentWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ErrorCode>404</ErrorCode>
        <Title>Page Not Found</Title>
        <Description>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Description>
        <Button as={Link} to="/" variant="primary">
          Go Back Home
        </Button>
      </ContentWrapper>
    </NotFoundContainer>
  );
};

export default NotFound; 