"use client"

import { CirclePause, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react"

export const MusicPlayer = () => {
    return <div className="flex flex-col justify-center items-center flex-grow space-y-4">
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
}