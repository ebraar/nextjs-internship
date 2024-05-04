"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { DraftModeProvider } from 'next/dist/server/async-storage/draft-mode-provider';

const Trial = () => {
    const routerRed = useRouter();
    console.log('trial');
    return (
        <>
        <div onClick={() => routerRed.push('/about')}>Push</div>
        <div onClick={() => routerRed.back()}>Push</div> 
        <div onClick={() => routerRed.forward()}>Push</div> 
        <div onClick={() => routerRed.refresh()}>Push</div> 
        </>
    );
}

export default Trial;
