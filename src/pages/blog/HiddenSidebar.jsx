import { useState } from "react";
import Sidebar from "./Sidebar";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export default function HiddenSidebar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed bottom-6 left-6 set-bg z-50 md:hidden">
            <div className="p-3 fixed bottom-6 left-6 w-12 h-12  set-bg-dark z-50 md:hidden rounded-full" onClick={() => setOpen(!open)}>
                {open ? <RxCross2 /> : <RxHamburgerMenu />}
            </div>
            {open && <div className="fixed top-0 left-0 bottom-0 set-bg z-40 md:hidden set-divide border-r"><Sidebar /></div>}
        </div>
    )
}
