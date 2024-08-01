"use client"

import { CirclePause, Heart, Mic, MonitorSpeaker, Repeat, Share2, Shuffle, SkipBack, SkipForward, SquarePlus, Volume2 } from 'lucide-react';
import { Song } from './Song';
import { MusicPlayer } from './MusicPlayer';
import { Sound } from './Sound';

export const Player = () => {
    return (
        <div className="text-white flex flex-row justify-between items-center">
            <div className='w-2/12'>
                <Song />
            </div>
            <div className='w-full'>
                <MusicPlayer />
            </div>
            <div className='w-2/12'>
                <Sound />
            </div>
        </div>
    )
}