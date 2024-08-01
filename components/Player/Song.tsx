"use client"

import { Heart, SquarePlus } from "lucide-react"

export const Song = () => {
    return <div className="flex flex-row justify-between items-center space-x-8">
        <div className="flex flex-col">
            <div className="font-semibold ">
                Runaway
            </div>
            <div className="font-light text-gray-400">
                Kanye West
            </div>
        </div>
        <div className="flex space-x-4">
            <div className="text-gray-400">
                <Heart />
            </div>
            <div className="text-gray-400">
                <SquarePlus />
            </div>
        </div>

    </div>
}