"use client"

import { ChevronLeft, ChevronRight, Ellipsis, Search } from "lucide-react"

export const TopBar = () => {
    return <div className="flex gap-4 items-center mb-8">
        <div className="justify-center items-center">
            <button className="flex rounded-full justify-center items-center hover:bg-slate-700 h-10 w-10">
                <ChevronLeft />
            </button>
        </div>
        <div>
            <button className="flex rounded-full justify-center items-center hover:bg-slate-700 h-10 w-10">
                <ChevronRight />
            </button>
        </div>

        <div className="flex-grow h-10 relative">
            <Search className="absolute h-7 top-1/2 left-3 transform -translate-y-1/2 text-black" />
            <input
                className="rounded-full text-gray-800 p-4 pl-10 w-full h-full"
                type="text"
                placeholder="Search for artists, songs or albums"
            />
        </div>
        <div>
            <button>
                <Ellipsis />
            </button>
        </div>
    </div>
}