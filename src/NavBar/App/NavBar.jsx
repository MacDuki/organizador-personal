import { CreateTaskPanel } from "../CreateTaskPanel/CreateTaskPanel"
import { generalContext } from "../../functions/GeneralContext"
import React from 'react'
import { Panel } from "../Panel/Panel"
import {AnimatePresence, motion} from 'framer-motion'
function NavBar() {
    const {showPanel} = React.useContext(generalContext)

   
    return (
        <motion.nav     
        className={'w-full h-auto fixed top-0 z-50 flex justify-center items-center'}>
            <AnimatePresence>
        {!showPanel? 
    <motion.div 
    initial={{ x: -1500 }}
    animate={{ x: 0 }}
    exit={{ x: 500 }}
    transition={{ ease: "easeOut", duration: 0.5 }}
    className="w-full flex items-center justify-center" layout>
    <CreateTaskPanel/>
    </motion.div>  
    : 
    <motion.div 
    initial={{ x: -1500 }}
    animate={{ x: 0 }}
    exit={{ x: 500 }}
    transition={{ ease: "easeOut", duration: 0.5 }}
    className="w-full flex items-center justify-center" > 
    <Panel/> 
    </motion.div>}
       
        </AnimatePresence>
        </motion.nav> 
        
        )
} 

export {NavBar}