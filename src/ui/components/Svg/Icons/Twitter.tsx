import React from 'react';
import GradientSvg from '../SvgGradient';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <GradientSvg viewBox="0 0 512 512" x="0" y="0" xmlSpace="preserve" {...props}>
      <linearGradient
        id="twitter-gradient"
        gradientUnits="userSpaceOnUse"
        x1="152.8197"
        y1="2.499"
        x2="336.3693"
        y2="433.9736"
      >
        <stop offset="0.4457" style={{ stopColor: '#DD3095' }} />
        <stop offset="1" style={{ stopColor: '#7a17d9' }} />
      </linearGradient>
      <path
        fill="url(#twitter-gradient)"
        d="M173.5,448.9c176.9,0,273.7-146.6,273.7-273.7c0-4.2,0-8.3-0.3-12.4c18.8-13.6,35.1-30.5,48-49.8  c-17.6,7.8-36.2,12.9-55.3,15.1c20.1-12,35.1-30.9,42.3-53.2c-18.9,11.2-39.5,19.1-61.1,23.4c-18.2-19.3-43.6-30.3-70.1-30.3  c-52.8,0-96.3,43.5-96.3,96.3c0,7.3,0.8,14.6,2.5,21.8c-77.3-3.9-149.4-40.4-198.3-100.5c-25.4,43.7-12.3,100.4,29.8,128.4  c-15.3-0.5-30.3-4.6-43.7-12v1.2c0,45.6,32.5,85.3,77.2,94.3c-14.2,3.9-29,4.4-43.4,1.7c12.6,39.1,48.8,66,89.9,66.8  c-34.1,26.8-76.2,41.3-119.5,41.3c-7.7,0-15.3-0.5-22.9-1.4C70,433.9,121.2,448.9,173.5,448.9"
      />
    </GradientSvg>
  );
};

export default Icon;
