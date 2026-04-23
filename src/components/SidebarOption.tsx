import { ReactElement } from "react"
import { useRecoilValue } from "recoil"
import { activeSidebarOption } from "../atoms"

export const SidebarOption = ({
    text,
    icon,
    variant,
    onClick
}:
{
    text:string,
    icon : ReactElement,
    variant : "home" | "fav" | "doc",
    onClick ?: ()=>void
})=>{

    const sidebarOpt = useRecoilValue(activeSidebarOption)
    
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.();
        }
    }

    return(
        <button 
            onClick={onClick}
            onKeyDown={handleKeyDown}
            aria-label={text}
            aria-current={variant === sidebarOpt.option ? "page" : undefined}
            className={` ${variant === sidebarOpt.option ? " bg-blue-600/20 text-blue-500 " :' '} mx-2 rounded-lg flex py-2 px-6 my-6 items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
            <div className={`  ${variant === sidebarOpt.option ? "text-blue-500 " :' '}`}>
                {icon }
            </div>
            <h3 className={`  ${variant === sidebarOpt.option ? "text-blue-500 " :' '}
                text-md font-medium tracking-tighter font-primary lg:text-lg`}>
                {text}
            </h3>
        </button>
    )
}