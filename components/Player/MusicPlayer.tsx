"use client"

import { CirclePause, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react"

export const MusicPlayer = () => {
    return <div className="flex flex-col justify-center items-center flex-grow space-y-4">
        <div className="flex w-full flex-row justify-center items-center space-x-8">
            <div className="text-gray-400">
                <Shuffle />
            </div>
            <div className="text-gray-400">
                <SkipBack />
            </div>
            <div className="text-gray-400">
                <CirclePause />
            </div>
            <div className="text-gray-400">
                <SkipForward />
            </div>
            <div className="text-gray-400">
                <Repeat />
            </div>
        </div>
        <div className='flex w-full  justify-center items-center'>
            <input className='w-1/2 h-1' type="range" min="1" max="100" value="40" />
        </div>
    </div>
}