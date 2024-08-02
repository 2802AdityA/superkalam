import { ReactNode } from "react"

export const Button = ({ children }: { children: ReactNode }) => {
    return <button className="flex rounded-full justify-center items-center text-gray-500 hover:text-white transition duration-500 hover:bg-gray-700 h-0 w-0 md:h-10 md:w-10">{children}</button>
}