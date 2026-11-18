import React from 'react';

interface AiSparkleIconProps {
  size?: number;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Pixel-perfect AI multi-sparkle vector icon
 * (Google Gemini / Modern AI style with primary organic sparkle and secondary stars)
 */
export function AiSparkleIcon({
  size = 24,
  className = '',
  color = 'currentColor',
  style = {},
}: AiSparkleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      {/* Primary Organic Sparkle Star */}
      <path d="M10.5 2C10.5 6.41 6.91 10 2.5 10C6.91 10 10.5 13.59 10.5 18C10.5 13.59 14.09 10 18.5 10C14.09 10 10.5 6.41 10.5 2Z" />
      {/* Top Right Secondary Sparkle */}
      <path d="M18.5 2C18.5 3.93 16.93 5.5 15 5.5C16.93 5.5 18.5 7.07 18.5 9C18.5 7.07 20.07 5.5 22 5.5C20.07 5.5 18.5 3.93 18.5 2Z" />
      {/* Bottom Right Complementary Sparkle */}
      <path d="M18 14.5C18 16.16 16.66 17.5 15 17.5C16.66 17.5 18 18.84 18 20.5C18 18.84 19.34 17.5 21 17.5C19.34 17.5 18 16.16 18 14.5Z" />
    </svg>
  );
}

export default AiSparkleIcon;
