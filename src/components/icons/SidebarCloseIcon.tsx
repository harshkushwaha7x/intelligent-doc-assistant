export const SidebarCloseIcon = (props:{
    onClick:()=>void
}) =>{
    return(
        <button onClick={props.onClick}
         className=" flex items-center rounded-lg p-3 text-white text-center transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-panel-left-open"
      >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M9 3v18"></path>
        <path d="m14 9 3 3-3 3"></path>
      </svg>
    </button>
    )
}