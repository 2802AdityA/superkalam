"use client"

import { Heart, SquarePlus } from "lucide-react"
import { PlayerButton } from './PlayerButton';

export const Song = () => {
    return <div className="flex flex-row justify-between items-center space-x-8">
        <div className="flex flex-col">
            <div className="font-semibold ">
                Runaway
            </div>
            <div className="font-light text-gray-400 hover:underline hover:text-gray-200">
                Kanye West
            </div>
        </div>
        <div className="flex space-x-4">
            <PlayerButton>
                <Heart />
            </PlayerButton>
            <PlayerButton>
                <SquarePlus />
            </PlayerButton>
        </div>

    </div>
}
