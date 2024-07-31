"use client"

import { PanelRow } from "./PanelRow"

export const PanelColumn = ({ title, content }: { title: string, content: any }) => {
    return <div className="mt-4">
        <div className="text-xs text-gray-500 mt-4">
            {title}
        </div>
        <div className="mt-4 mb-6">
            {content.map((con: any) => {
                return <PanelRow key={con.title} content={con} />
            })}
        </div>
    </div>
}