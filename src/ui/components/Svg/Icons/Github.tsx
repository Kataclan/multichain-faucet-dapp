import React from 'react';
import GradientSvg from '../SvgGradient';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <GradientSvg viewBox="0 0 32 32" {...props}>
      <linearGradient
        xmlns="http://www.w3.org/2000/svg"
        id="github-gradient"
        gradientUnits="userSpaceOnUse"
        x1="9.4907"
        y1="3.6943"
        x2="24.4631"
        y2="31.9747"
      >
        <stop offset="0.1766" style={{ stopColor: '#DD3095' }} />
        <stop offset="1" style={{ stopColor: '#7A17D9' }} />
      </linearGradient>
      <path
        fill="url(#github-gradient)"
        d="M16,0C7.2,0,0,7.2,0,16c0,7.1,4.6,13.1,10.9,15.2c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.8  c-4.4,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3  c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6  c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3  c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,2.9c0,2,0,3.9,0,4.4c0,0.4,0.3,0.9,1.1,0.7C27.4,29.1,32,23.1,32,16C32,7.2,24.8,0,16,0  z"
      />
    </GradientSvg>
  );
};

export default Icon;
