import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.background}dd;
  backdrop-filter: blur(8px);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.space.xl} 0;
  margin-top: auto;
`;

const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.md};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.lg};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  transition: all ${({ theme }) => theme.transitions.fast};
  padding: ${({ theme }) => theme.space.sm};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.border};
    transform: translateY(-2px);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GithubIcon />,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon />,
      url: 'https://twitter.com/yourusername',
    },
  ];

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterLinks>
            {navLinks.map((link) => (
              <FooterLink key={link.path} to={link.path}>
                {link.name}
              </FooterLink>
            ))}
          </FooterLinks>
          
          <Copyright>
            © {currentYear} Adam Matar. All rights reserved.
          </Copyright>
          
          <SocialLinks>
            {socialLinks.map((link) => (
              <SocialLink
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopestate: { isDark: boolean; setIsDark: (isDark: boolean) => void; }ner noreferrer"
                title={link.name}
              >
                {link.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer; 