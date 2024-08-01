"use client"
import { PanelColumn } from "./PanelColumn"
import leftPanel from '../../utils/LeftPanel';
import { Menu } from "lucide-react";
import Image from "next/image";
import runaway from "../../public/runaway.jpeg"
import { Button } from "../Button";


export const Left = () => {
    return <div className="flex flex-col text-white justify-between w-full ">
        <div className="flex-grow m-8">
            <div className="flex justify-between items-center mb-6">
                <div className="font-black text-3xl text-blue-600">
                    W
                </div>
                <Button>

                    <Menu />
                </Button>
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