import {useContext} from "react";
import {SidebarContext} from './Sidebar.jsx'

// eslint-disable-next-line react/prop-types
export default function SidebarItem({icon, text, active, alert, onSelectTab}) {
    const {expanded} = useContext(SidebarContext)

    return (
        <li
            onClick={() => onSelectTab(text)}
            className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
                active
                    ? "bg-gradient-to-tr from-rvblue-200 to-rvblue-100 text-rvblue-800"
                    : "hover:bg-rvblue-100 text-rvblue-600"
            }
    `}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
        {text}
      </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-rvblue-400 ${
                        expanded ? "" : "top-2"
                    }`}
                />
            )}

            {!expanded && (
                <div
                    className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-rvblue-200 text-rvblue-900 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                >
                    {text}
                </div>
            )}
        </li>
    )
}