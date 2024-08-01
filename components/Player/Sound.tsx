"use client"

import { Mic, MonitorSpeaker, Share2, Volume2 } from "lucide-react"

export const Sound = () => {
    return <div className="flex items-center">
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
}