"use client"
import Image from 'next/image'

import cat from "../../public/cat.png"
import { RightColumn } from './RightColumn'
import rightPanel from '@/utils/RightPanel'
import { Bell, ChevronDown } from 'lucide-react'

export const Right = () => {
    return (
        <div className="text-white  flex-col m-8">
            <div className="flex justify-between items-center ">
                <div className="flex items-center">
                    <div className='h-12 w-12 mr-4'><Image src={cat} alt="avatar" className='rounded-full' /></div>
                    <div className='font-bold text-gray-300 text-lg'>aditya singla</div>
                </div>
                <div className="flex gap-4">
                    <div>
                        <Bell className='text-gray-300 ' />
                    </div>
                    <div>
                        <ChevronDown className='text-gray-300' />
                    </div>
                </div>
            </div>
            {
                rightPanel.map((column) => {
                    return <RightColumn key={column.title} title={column.title} content={column.content} />
                })
            }

            <button className="w-full rounded-lg text-xl mt-6 h-14 text-black font-bold bg-gray-300">Create New Playlist</button>


        </div>)
}