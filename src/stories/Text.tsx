//import React from 'react';
import './text.css';

interface TextProps {
  /**
   * Text content
   */
  text?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Text size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Text weight
   */
  weight: string;
}

/**
 * Primary UI component for user interaction
 */
export const Text = ({
  text = 'Paragraph',
  color = 'black',
  size = 'medium',
  weight = 'normal',
  ...props
}: TextProps) => {
  return (
    <p className={['storybook-text', `storybook-text--${size}`, `storybook-text--${weight}`].join(' ')}
      style={{ color }}
      {...props}
    >
      {text}
    </p>
  );
};
