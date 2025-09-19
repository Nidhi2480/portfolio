import { useEffect } from 'react';

const useScrollTranslate = (className, offset = 60) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;

      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementCenterY = rect.top + rect.height / 2;

        if (!element.classList.contains('translate-up') && Math.abs(centerY - elementCenterY) < offset) {
          element.classList.add('translate-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount in case elements are already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, [className, offset]);
};

export default useScrollTranslate;
