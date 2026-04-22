export const SidebarOpenIcon=(props:
    {
        onClick:()=>void
    }
)=>{
    return(
        <button onClick={props.onClick}
         className="text-white flex items-center rounded-lg p-3 text-center transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panel-left-close "><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 3v18"></path><path d="m16 15-3-3 3-3"></path>
            </svg>
        </button>
    )
}