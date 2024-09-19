'use client'
// components/JumpableComponent.tsx
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import './index.css';
interface JumpableProps {
    children: ReactNode;
    jumpHeight: number; // 
    onJumpEnd: () => void;
    onJumpStart: () => void;
    jumpTime: number;
}
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicAttributes {
            style?: React.CSSProperties & {
                ['--jump-height']?: string;
                ['--jump-time']?: string;
            };
        }
    }
}
const JumpableComponent: React.FC<JumpableProps> = (props) => {
    const [isJumping, setIsJumping] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    const handleJump = () => {
        if (elementRef.current) {
            if (props.onJumpStart) {
                props.onJumpStart();
            }
            elementRef.current.classList.add('jump');
            setIsJumping(true);
            setTimeout(() => {
                elementRef?.current?.classList.remove('jump');
                setIsJumping(false);
                if (props.onJumpEnd) {
                    props.onJumpEnd();
                }
            }, props.jumpTime); // 
        }
    };

    useEffect(() => {
        const handleSpaceKeyPress = (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                handleJump();
            }
        };

        window.addEventListener('keydown', handleSpaceKeyPress);
        return () => {
            window.removeEventListener('keydown', handleSpaceKeyPress);
        };
    }, []);
    const jumpStyle = {
        '--jump-height': `-${props.jumpHeight}px`,
        '--jump-time': `${props.jumpTime}ms`,
    };
    return (
        <div
            ref={elementRef}
            onClick={handleJump}
            className={`component ${isJumping ? 'jumping' : ''}`}
            style={jumpStyle as React.CSSProperties & {
                ['--jump-height']?: string;
                ['--jump-time']?: string;
            }}>
            {props.children}
        </div>
    );
};

export default JumpableComponent;