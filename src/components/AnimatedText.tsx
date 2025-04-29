import { motion } from 'framer-motion';
import styled from 'styled-components';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const AnimatedText = ({ text, delay = 0, className }: AnimatedTextProps) => {
  const letters = text.split('');

  return (
    <motion.span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.05,
            ease: 'easeOut',
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText; 