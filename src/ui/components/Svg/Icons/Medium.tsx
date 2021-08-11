import React from 'react';
import GradientSvg from '../SvgGradient';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <GradientSvg viewBox="0 0 24 24" {...props}>
      <linearGradient
        xmlns="http://www.w3.org/2000/svg"
        id="medium-gradient"
        gradientUnits="userSpaceOnUse"
        x1="4.3178"
        y1="2.7444"
        x2="19.6459"
        y2="21.2119"
      >
        <stop offset="5.215953e-03" style={{ stopColor: '#DD3095' }} />
        <stop offset="1" style={{ stopColor: '#7A17D9' }} />
      </linearGradient>
      <path
        fill="url(#medium-gradient)"
        d="M0,0v24h24V0H0z M19.9,5.7l-1.3,1.2c-0.1,0.1-0.2,0.2-0.1,0.4v9.1c0,0.1,0,0.3,0.1,0.4l1.3,1.2v0.3h-6.3v-0.3  l1.3-1.3c0.1-0.1,0.1-0.2,0.1-0.4V9l-3.6,9.2h-0.5L6.7,9v6.2c0,0.3,0.1,0.5,0.2,0.7l1.7,2.1v0.3H3.8v-0.3l1.7-2.1  c0.2-0.2,0.3-0.5,0.2-0.7V8c0-0.2-0.1-0.4-0.2-0.5L4,5.7V5.4h4.7l3.6,7.9l3.2-7.9h4.5V5.7z"
      />
    </GradientSvg>
  );
};

export default Icon;
