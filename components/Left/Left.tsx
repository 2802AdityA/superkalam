"use client"
import { PanelColumn } from "./PanelColumn"
import leftPanel from '../../utils/LeftPanel';
import { Menu } from "lucide-react";


export const Left = () => {
    return <div className="text-white flex-col">
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
        <div className="relative bottom-0">
            bottom
        </div>
    </div>
}