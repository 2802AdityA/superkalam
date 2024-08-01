"use client"

import { Heart, SquarePlus } from "lucide-react"

export const Song = () => {
    return <div className="flex flex-row justify-between items-center space-x-4">
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
}