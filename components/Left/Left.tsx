"use client"
import { PanelColumn } from "./PanelColumn"
import leftPanel from '../../utils/LeftPanel';
import { Menu } from "lucide-react";
import Image from "next/image";
import runaway from "../../public/runaway.jpeg"


export const Left = () => {
    return <div className="flex flex-col pb-24 justify-between w-0 lg:w-1/6 lg:min-w-1/6 bg-leftC overflow-y-hidden min-h-screen text-white ">
        <div className="flex-grow m-8">
            <div className="flex justify-between items-center mb-6">
                <div className="font-black text-3xl text-blue-600">
                    W
                </div>
                <div className="">
                    <Menu />
                </div>
            </div>
            <div>
                {leftPanel.map((column) => {
                    return <PanelColumn key={column.title} title={column.title} content={column.content} />
                })}
            </div>
        </div>
        <div className="flex flex-grow flex-col-reverse w-full">
            <Image className="w-full" alt="runaway" src={runaway} />
        </div>
    </div>
}