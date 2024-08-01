"use client"
import { CirclePause, Heart, Mic, MonitorSpeaker, Repeat, Share2, Shuffle, SkipBack, SkipForward, SquarePlus, Volume2 } from 'lucide-react';

export const Player = () => {
    return (
        <div className="text-white flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center space-x-4">
                <div className="flex flex-col">
                    <div>
                        Runaway
                    </div>
                    <div>
                        Kanye West
                    </div>
                </div>
                <div className="flex space-x-2">
                    <div>
                        <Heart />
                    </div>
                    <div>
                        <SquarePlus />
                    </div>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center flex-grow space-y-4">
                <div className="flex w-full flex-row justify-center items-center">
                    <div>
                        <Shuffle />
                    </div>
                    <div>
                        <SkipBack />
                    </div>
                    <div>
                        <CirclePause />
                    </div>
                    <div>
                        <SkipForward />
                    </div>
                    <div>
                        <Repeat />
                    </div>
                </div>
                <div className='flex w-full justify-center items-center'>
                    <input className='w-1/2' type="range" min="1" max="100" value="40" />
                </div>
            </div>
            <div className="flex items-center">
                <div>
                    <Volume2 />
                </div>
                <div className='w-16'>
                    <input className='w-16' type="range" min="1" max="100" value="40" />
                </div>
                <div>
                    <Mic />
                </div>
                <div>
                    <MonitorSpeaker />
                </div>
                <div>
                    <Share2 />
                </div>
            </div>
        </div>
    )
}