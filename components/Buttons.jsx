import React, { useState, useRef, useContext } from 'react';
import { ScreenContext } from './Layout';

export default function Buttons({ isMuted, setIsMuted, setFile }) {
    const isSmallScreen = useContext(ScreenContext);
    const [channel, setChannel] = useState(1);
    const audioRef = useRef(null);

    const handleToggleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleNextChannel = () => {
        setIsMuted(false);
        audioRef.current.volume = 0.2;
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        let nextChannel = (channel + 1) % 9;
        if (nextChannel === 0) {
            nextChannel = 1;
        }
        setFile(0);
        setTimeout(() => {
            audioRef.current.pause();
            setFile(nextChannel);
            setChannel(nextChannel);
        }, 800);
    };

    const handlePrevChannel = () => {
        setIsMuted(false);
        audioRef.current.volume = 0.2;
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        let nextChannel = (channel - 1) % 9;
        if (nextChannel === 0) {
            nextChannel = 8;
        }
        setFile(0);
        setTimeout(() => {
            audioRef.current.pause();
            setFile(nextChannel);
            setChannel(nextChannel);
        }, 800);
    };

    if (isSmallScreen) {
        return (
            <div className='flex justify-between items-center flex-col absolute top-0 left-0 w-full h-full py-16 z-[99] opacity-40'>
                <div>
                    <p className='text-white text-4xl text-osd text-chromatic select-none tracking-wide h-fit uppercase cursor-pointer' onClick={handleToggleMute}>
                        {isMuted ? 'Unmute' : 'Mute'}
                    </p>
                </div>

                <div className='flex gap-8'>
                    <p className='text-white text-4xl text-osd text-chromatic select-none tracking-wide h-fit uppercase cursor-pointer' onClick={handlePrevChannel}>
                        &lt;
                    </p>
                    <p className='text-white text-4xl text-osd text-chromatic select-none tracking-wide h-fit uppercase'>
                        Channel {channel}
                    </p>
                    <p className='text-white text-4xl text-osd text-chromatic select-none tracking-wide h-fit uppercase cursor-pointer' onClick={handleNextChannel}>
                        &gt;
                    </p>
                </div>

                <audio ref={audioRef} src='/static.m4a' />
            </div>
        )
    }

    return (
        <div className='flex justify-between absolute top-0 left-0 w-full h-full py-16 px-28 z-[99] opacity-40'>
            <div>
                <p className='text-white text-4xl text-osd text-chromatic select-none tracking-wide h-fit uppercase cursor-pointer' onClick={handleToggleMute}>
                    {isMuted ? 'Unmute' : 'Mute'}
                </p>
            </div>

            <div className='flex gap-8'>
                <p className='text-white text-4xl text-osd text-chromatic select-none tracking-wide h-fit uppercase cursor-pointer' onClick={handlePrevChannel}>
                    &lt;
                </p>
                <p className='text-white text-4xl text-osd text-chromatic select-none tracking-wide h-fit uppercase'>
                    Channel {channel}
                </p>
                <p className='text-white text-4xl text-osd text-chromatic select-none tracking-wide h-fit uppercase cursor-pointer' onClick={handleNextChannel}>
                    &gt;
                </p>
            </div>

            <audio ref={audioRef} src='/static.m4a' />
        </div>
    )
}