import React, { useState } from 'react';
import Overlays from './Overlays';
import Buttons from './Buttons';

export default function VideoPlayer() {
    const [isMuted, setIsMuted] = useState(true);
    const [file, setFile] = useState(1);

    return (
        <React.Fragment>
            <div className='w-full h-full bg-black p-3 rounded-3xl'>
                <Overlays />
                <Buttons isMuted={isMuted} setIsMuted={setIsMuted} setFile={setFile} />
                <video className='w-full h-full blur-sm object-cover' src={`/${file}.mp4`} autoPlay playsInline loop muted={isMuted} />
            </div>
        </React.Fragment>
    )
}