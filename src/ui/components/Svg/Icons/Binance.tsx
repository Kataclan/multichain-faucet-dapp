import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1200 800" {...props}>
      <path d="M450.4,450.6l-78.2,78.1l-78.1-78.1l78.1-78.1L450.4,450.6z M639.9,260.9l133.8,133.9l78.1-78.1   L639.9,104.8L428,316.7l78.1,78.1L639.9,260.9z M907.6,372.5l-78.1,78.1l78.1,78.1l78-78.1L907.6,372.5z M639.9,640.2L506.1,506.4   l-78.1,78l211.9,211.9l211.9-211.9l-78.1-78L639.9,640.2z M639.9,528.6l78.1-78.1l-78.1-78.1l-78.1,78.1L639.9,528.6z" />
    </Svg>
  );
};

export default Icon;
