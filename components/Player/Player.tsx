"use client"

import { Song } from './Song';
import { MusicPlayer } from './MusicPlayer';
import { Sound } from './Sound';

export const Player = () => {
    return (
        <div className="text-white flex flex-row justify-between items-center">
            <div className='w-1/4'>
                <Song />
            </div>
            <div className='w-full'>
                <MusicPlayer />
            </div>
            <div className='hidden xl:block xl:w-1/4'>
                <Sound />
            </div>
        </div>
    );
}