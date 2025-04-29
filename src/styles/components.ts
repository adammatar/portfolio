import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.md};
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.space['3xl']} 0;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  border: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};

  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.background};
          &:hover {
            background-color: ${theme.colors.primary}cc;
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.background};
          &:hover {
            background-color: ${theme.colors.secondary}cc;
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.primary}11;
          }
        `;
    }
  }}
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.space.xl};
  transition: transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Grid = styled.div<{ columns?: number }>`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(${({ columns = 2 }) => columns}, 1fr);
  }
`;

export const Heading = styled.h1<{ size?: keyof typeof headingSizes }>`
  ${({ size = '2xl', theme }) => css`
    font-size: ${theme.fontSizes[size]};
    margin-bottom: ${theme.space.lg};
  `}
`;

const headingSizes = {
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl',
  '5xl': '5xl',
} as const;

export const Text = styled.p<{ color?: 'primary' | 'light' }>`
  ${({ color, theme }) =>
    color === 'primary'
      ? css`
          color: ${theme.colors.primary};
        `
      : color === 'light'
      ? css`
          color: ${theme.colors.textLight};
        `
      : css`
          color: ${theme.colors.text};
        `}
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`; 