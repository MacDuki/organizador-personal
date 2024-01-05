import { CreateTaskPanel } from "../CreateTaskPanel/CreateTaskPanel"
import { GeneralContext, generalContext } from "../../functions/GeneralContext"
import { useContext } from "react"
function NavBar() {

    return (
        <nav className={'w-full   h-20 bg-slate-600 fixed top-0  '}>
           
            <div className={'flex flex-row '}>
            <CreateTaskPanel/> 
            </div>
        </nav> 
        
        )
} 

export {NavBar}