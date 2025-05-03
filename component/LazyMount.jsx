"use client";
import React, { useEffect, useRef, useState } from "react";

const LazyMount = ({ children, threshold = 0.2 }) => {
    const containerRef = useRef(null);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("IntersectionObserver Entry: ", entry);  // Debugging line
                if (entry.isIntersecting) {
                    setShouldRender(true);
                    observer.disconnect(); // Mount only once
                }
            },
            { threshold }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div ref={containerRef} style={{ minHeight: "100px" }}>
            {shouldRender ? children : null}
        </div>
    );
};

export default LazyMount;
