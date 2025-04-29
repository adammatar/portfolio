import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background}dd;
  backdrop-filter: blur(8px);
  z-index: 50;
  padding: ${({ theme }) => theme.space.md} 0;
`;

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: none;
  gap: ${({ theme }) => theme.space.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeToggle = styled.button`
  padding: ${({ theme }) => theme.space.sm};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

interface NavbarProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const Navbar = ({ isDark, setIsDark }: NavbarProps) => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Adam Matar</Logo>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <NavLinks>
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path}>
                {link.name}
              </NavLink>
            ))}
          </NavLinks>
          
          <ThemeToggle onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <SunIcon style={{ width: '1.5rem', height: '1.5rem' }} />
            ) : (
              <MoonIcon style={{ width: '1.5rem', height: '1.5rem' }} />
            )}
          </ThemeToggle>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 