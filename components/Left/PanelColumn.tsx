"use client"

import { PanelRow } from "./PanelRow"

export const PanelColumn = ({ title, content }: { title: string, content: any }) => {
    return <div>
        <div className="text-sm">
            {title}
        </div>
        <div className="my-4">
            {content.map((con: any) => {
                return <PanelRow key={con.title} content={con} />
            })}
        </div>
    </div>
}