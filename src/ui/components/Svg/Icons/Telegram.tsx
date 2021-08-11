import React from 'react';
import GradientSvg from '../SvgGradient';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <GradientSvg viewBox="0 0 512 512" {...props}>
      <linearGradient
        xmlns="http://www.w3.org/2000/svg"
        id="tg-gradient"
        gradientUnits="userSpaceOnUse"
        x1="267.3798"
        y1="112.7912"
        x2="204.6645"
        y2="408.2609"
      >
        <stop offset="1.641490e-02" style={{ stopColor: '#DD3095' }} />
        <stop offset="1" style={{ stopColor: '#7A17D9' }} />
      </linearGradient>

      <path
        fill="url(#tg-gradient)"
        d="M484.7,98.2l-69.4,327.4c-5.2,23.1-18.9,28.9-38.3,18l-105.8-77.9l-51,49.1c-5.6,5.6-10.4,10.4-21.3,10.4    l7.6-107.7l196-177.1c8.5-7.6-1.8-11.8-13.2-4.2L146.9,288.6L42.6,256c-22.7-7.1-23.1-22.7,4.7-33.6L455.4,65.2    C474.3,58.1,490.9,69.4,484.7,98.2z"
      />
    </GradientSvg>
  );
};

export default Icon;
