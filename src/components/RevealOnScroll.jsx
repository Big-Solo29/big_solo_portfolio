import React, { useEffect, useRef } from 'react';

const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                ref.current.classList.add("visible");
                // Optional: Unobserve after animation to improve performance
                // observer.unobserve(entry.target);
            }
        }, { 
            threshold: 0.2, 
            rootMargin: "0px 0px -5px 0px" 
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div ref={ref} className='reveal'>
            {children}
        </div>
    );
};

export default RevealOnScroll;