"use client";
import React, { useState, useEffect } from 'react';

const FUIImageFollowMouse = ({s, className}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cardRef = React.useRef(null);
    const containerRef = React.useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const e = event;
            setPosition({ x: event.clientX, y: event.clientY });
            const shadowX = Math.min(1, Math.max(-1, (e.clientX - window.innerWidth / 2) / 50));
            const shadowY = Math.min(1, Math.max(-1, (e.clientY - window.innerHeight / 2) / 50));
            cardRef.current.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 3px #fc05)`;
            containerRef.current.style.transform = calcRotation(e.clientX, e.clientY);
        };

        cardRef.current.src = s;

        document.body.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calcRotation = (x, y) => {
        const rotationX = Math.max(-10, Math.min(10, (window.innerHeight / 2 - y) / 40));
        const rotationY = Math.max(-10, Math.min(10, (x - window.innerWidth / 2) / 40));
        return `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    };

    const containerStyle = {
        perspective: '1000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    };

    const imageStyle = {
        width: '100%',
        height: '100%', 
        objectFit: 'cover',
        transition: 'transform 0.1s'
    };

    return (
        <div className={className} style={containerStyle} ref={containerRef}>
            <img alt="Follow Mouse"  ref={cardRef} style={imageStyle} />
        </div>
    );
};

export default FUIImageFollowMouse;