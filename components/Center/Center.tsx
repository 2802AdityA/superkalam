"use client"

import Image from "next/image"
import mainCover from "../../public/maincover.jpg"
import { TopBar } from "./TopBar";
import centerPanel from "@/utils/CenterPanel";
import { CenterRow } from "./CenterRow";

export const Center = () => {
    return <div className="text-white flex-col mt-[4%] mx-[5%]">
        <TopBar />

        {
            mainCover ?
                <Image className="rounded-2xl w-full h-100%" src={mainCover} alt="main cover" /> : <div className="bg-[#ffffff10] rounded-2xl w-full h-[25%] animate-pulse"></div>
        }

        {
            centerPanel.map((row) => {
                return <CenterRow key={row.title} row={row} />
            })
        }

    </div>
}