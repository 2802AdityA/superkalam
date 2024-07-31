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
            {/* <div className="flex items-center">
                <FontAwesomeIcon className="h-5" icon={faHouse} />
                <div className="ml-4">
                    Home
                </div>
            </div> */}
            {/* <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Discover
            </div>
            <div>
                Collections
            </div> */}
        </div>
    </div>
}