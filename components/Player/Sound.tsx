"use client"

import { Mic, MonitorSpeaker, Share2, Volume2 } from "lucide-react"

export const Sound = () => {
    return <div className="flex items-center space-x-4">
        <div className="text-gray-400">
            <Volume2 />
        </div>
        <div className='flex w-full  justify-center items-center'>
            <input className='w-full h-1' type="range" min="1" max="100" value="40" />
        </div>
        <div className="text-gray-400">
            <Mic />
        </div>
        <div className="text-gray-400">
            <MonitorSpeaker />
        </div>
        <div className="text-gray-400">
            <Share2 />
        </div>
    </div>
}