// SmoothScroll.js
import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const bodyScrollBar = Scrollbar.init(containerRef.current, { damping: 0.09 });

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: containerRef.current });

    return () => {
      if (bodyScrollBar) bodyScrollBar.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', overflow: 'hidden' }}>
      <div style={{ height: '200%' }}>
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
