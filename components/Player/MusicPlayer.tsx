"use client"

import { CirclePause, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react"
import { ReactNode } from "react"

export const MusicPlayer = () => {
    return <div className="flex flex-col justify-center items-center flex-grow space-y-4">
        <div className="flex w-full flex-row justify-center items-center space-x-8">
            <div className="hidden sm:block">
                <PlayerButton>
                    <Shuffle size={27} />
                </PlayerButton>
            </div>
            {/* <div className="hidden sm:block"> */}
            <PlayerButton>
                <SkipBack size={27} />
            </PlayerButton>
            {/* </div> */}
            <PlayerButton>
                <CirclePause size={27} />
            </PlayerButton>
            {/* <div className="hidden sm:block"> */}
            <PlayerButton>
                <SkipForward size={27} />
            </PlayerButton>
            {/* </div> */}
            <div className="hidden sm:block">
                <PlayerButton>
                    <Repeat size={27} />
                </PlayerButton>
            </div>
        </div>
        <div className='flex w-full  justify-center items-center'>
            <input className='w-1/2 h-1' type="range" min="1" max="100" value="40" />
        </div>
    </div>
}

const PlayerButton = ({ children }: { children: ReactNode }) => {
    return <button className=" text-gray-500 hover:text-white transition duration-500">{children}</button>
}