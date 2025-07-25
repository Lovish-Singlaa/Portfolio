import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return { isVisible, onChange, threshold };
};

export const ScrollAnimation = ({ children, className = '', delay = 0 }) => {
  const { isVisible, onChange, threshold } = useScrollAnimation();

  return (
    <VisibilitySensor onChange={onChange} threshold={threshold} partialVisibility>
      <div 
        className={`${className} ${isVisible ? 'visible' : ''}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </VisibilitySensor>
  );
};