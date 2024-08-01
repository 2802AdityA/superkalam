import { ReactNode } from "react"

export const Button = ({ children }: { children: ReactNode }) => {
    return <button className="flex rounded-full justify-center items-center text-gray-500 hover:text-white transition duration-500 hover:bg-gray-700 h-10 w-10">{children}</button>
}