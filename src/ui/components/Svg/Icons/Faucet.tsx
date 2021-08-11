import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 490.041 490.041" {...props}>
      <path d="M314.094,382.741h50.9v-73.1c0-15.9-12.8-28.4-28.4-28.4h-66.1v-45.5h-158.1v140.7h158.2v-48.2h30.7     c7.4,0,13.2,5.8,13.2,13.2v41.2h-0.4V382.741z" />
      <path d="M311.794,459.741c0,16.7,13.6,30.3,30.3,30.3c16.7,0,30.3-13.6,30.3-30.3c0-20.6-30.3-64.1-30.3-64.1     S311.794,442.641,311.794,459.741z" />
      <path d="M165.594,216.341h38.1c0,0-2.9-16.6,6.2-25.7l158.3-140.7c12-10.9,12.8-29.9,1.1-41.6l0,0c-11.7-11.7-30.7-10.9-41.6,1.2     l-162.1,182.7l0,0l0,0l0,0l0,0V216.341z" />
    </Svg>
  );
};

export default Icon;
