import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PanelColumn } from "./PanelColumn"
import leftPanel from '../../utils/LeftPanel';


export const Left = () => {
    return <div className="text-white flex-col">
        <div className="flex-grow m-6">
            <div className="flex justify-between items-center mb-6">
                <div className="font-black text-3xl text-blue-600">
                    W
                </div>
                <div className="">
                    <FontAwesomeIcon className="h-5" icon={faBars} />
                </div>
            </div>
            <div>
                {leftPanel.map((column) => {
                    return <PanelColumn key={column.title} title={column.title} content={column.content} />
                })}

                {/* <div>
                    Library
                </div>
                <div>
                    <div>
                        Download
                    </div>
                    <div>
                        Favourites
                    </div>
                    <div>
                        Local Files
                    </div>
                </div> */}
            </div>
        </div>
        <div className="relative bottom-0">
            bottom
        </div>
    </div>
}