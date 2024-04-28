import React from 'react';

export default function Overlays() {
    return (
        <React.Fragment>
            {/* Outline */}
            <div className='absolute top-0 left-0 w-full h-full z-[60] border-[30px] border-black blur-lg pointer-events-none'></div>
            {/* Vignette */}
            <div className='absolute top-0 left-0 w-full h-full z-[55] bg-[radial-gradient(circle,_transparent_60%,_#000_100%)] bg-transparent pointer-events-none'></div>
            {/* Artifacts */}
            <div className='flex absolute top-0 left-0 w-full h-full z-50 bg-[url("/artifacts.webp")] bg-cover opacity-[0.4] pointer-events-none'></div>
            {/* CRT Animation */}
            <div className='crt absolute top-0 left-0 w-full h-full z-45 pointer-events-none'></div>
        </React.Fragment>
    )
}