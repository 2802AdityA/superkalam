"use client"

import { Mic, MonitorSpeaker, Share2, Volume2 } from "lucide-react"
import { PlayerButton } from './PlayerButton';

export const Sound = () => {
    return <div className="flex items-center space-x-4">
        <PlayerButton>
            <Volume2 />
        </PlayerButton>
        <div className='flex w-full  justify-center items-center'>
            <input className='w-full h-1' type="range" min="1" max="100" value="40" />
        </div>
        <PlayerButton>
            <Mic />
        </PlayerButton>
        <PlayerButton>
            <MonitorSpeaker />
        </PlayerButton>
        <PlayerButton>
            <Share2 />
        </PlayerButton>
    </div>
}