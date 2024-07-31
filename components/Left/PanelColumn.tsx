"use client"

import { LeftContent } from "@/interface"
import { PanelRow } from "./PanelRow"

export const PanelColumn = ({ title, content }: { title: string, content: LeftContent[] }) => {
    return <div className="mt-4">
        <div className="text-xs text-gray-500 mt-4">
            {title}
        </div>
        <div className="mt-3 mb-6">
            {content.map((con: LeftContent) => {
                return <PanelRow key={con.title} content={con} />
            })}
        </div>
    </div>
}