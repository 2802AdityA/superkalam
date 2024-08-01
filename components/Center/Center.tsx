"use client"

import Image from "next/image"
import mainCover from "../../public/maincover.jpg"
import { TopBar } from "./TopBar";
import centerPanel from "@/utils/CenterPanel";
import { CenterRow } from "./CenterRow";

export const Center = () => {
    return <div className="flex-1 pb-16 bg-centerC overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent text-white flex-col pt-8 px-16">
        <TopBar />

        <Image className="rounded-2xl" src={mainCover} alt="main cover" />

        {
            centerPanel.map((row) => {
                return <CenterRow key={row.title} row={row} />
            })
        }

    </div>
}