'use client'

// components/ScaledComponent.tsx
import React, { useState, useRef, ReactNode } from 'react';
import './index.css';

interface scaledProps {
    children: ReactNode;
    enlargeRatio: number;
    narrowRatio: number;
    enlargeCallBack: () => void;
    narrowCallBack: () => void;
}


const ScaledComponent: React.FC<scaledProps> = (props) => {
    const [scaleFactor, setScaleFactor] = useState(1);
    const elementRef = useRef<HTMLDivElement>(null);

    const handleScale = (factor: number) => {
        if (elementRef.current) {

            setScaleFactor(prevScale => prevScale * factor);
            if (factor > 1) {
                props.enlargeCallBack();
            } else {
                props.narrowCallBack();
            }

        }
    };

    return (
        <div ref={elementRef} className={'component'}>
            <div className={'innerComponent'} style={{ transform: `scale(${scaleFactor})` }}>
                {props.children}
            </div>
            <div>
                <button onClick={() => handleScale(props.enlargeRatio)} className={'button'}>+</button>
                <button onClick={() => handleScale(props.narrowRatio)} className={'button'}>-</button>
            </div>

        </div>
    );
};

export default ScaledComponent;