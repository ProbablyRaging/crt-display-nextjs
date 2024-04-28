import React, { useState, useEffect, createContext } from 'react';
import Head from 'next/head';

export const ScreenContext = createContext(false);

export default function Layout({ children }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 930);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>probablyraging.dev</title>

                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='author' content='probablyraging' />

                <meta httpEquiv='content-language' content='en' />

                <meta property='og:title' content='probablyraging.dev' />
                <meta property='og:type' content='website' />

                <meta name='twitter:title' content='probablyraging.dev' />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>

            <ScreenContext.Provider value={isSmallScreen}>
                {children}
            </ScreenContext.Provider>
        </React.Fragment>
    )
}