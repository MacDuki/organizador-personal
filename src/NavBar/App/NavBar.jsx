import { CreateTaskPanel } from "../CreateTaskPanel/CreateTaskPanel"
import { generalContext } from "../../functions/GeneralContext"
import React from 'react'
import { Panel } from "../../LeftSection/Panel/Panel"
function NavBar() {
    const {showPanel} = React.useContext(generalContext)

   
    return (
        <nav className={'w-full   h-30 bg-slate-600 fixed top-0  '}>
        {!showPanel? <CreateTaskPanel/> : <Panel/> }
        </nav> 
        
        )
} 

export {NavBar}