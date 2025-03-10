"use client";
import React from 'react';
import Card from '../components/ui/Features/Card';

export const FUILogoGrid = ({ imageUrls, className, style }) => {
    return (
        <ul style={{...styles.gridContainer, ...style}} className={className}>
            {imageUrls.map((url, index) => (
                <Card key={index} icon={(
                    <img src={url} alt={`Logo ${index}`} style={{height: 100}}/>
                )} giantIcon={true}>
                   
                </Card>
            ))}
        </ul>
    );
};

const styles = {
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate3d(1, -1, 0, 333deg)',
        perspective: '1000px',
    },
};

export default FUILogoGrid;