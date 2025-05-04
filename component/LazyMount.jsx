"use client";
import React, { useEffect, useRef, useState } from "react";

const LazyMount = ({ children, threshold = 0.4, id }) => {
    const containerRef = useRef(null);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const hash = window.location.hash;

        // If this section is being navigated to, render it
        if (hash === `#${id}`) {
            setShouldRender(true);
        }

        const onHashChange = () => {
            if (window.location.hash === `#${id}`) {
                setShouldRender(true);
                containerRef.current?.scrollIntoView({ behavior: "smooth" }); // optional: smooth scroll
            }
        };

        window.addEventListener("hashchange", onHashChange);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldRender(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: "0px 0px -20% 0px" }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            window.removeEventListener("hashchange", onHashChange);
            observer.disconnect();
        };
    }, [threshold, id]);

    return (
        <div id={id} ref={containerRef} style={{ minHeight: "100vh" }}>
            {shouldRender ? children : null}
        </div>
    );
};

export default LazyMount;
