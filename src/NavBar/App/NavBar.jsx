import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { generalContext } from "../../functions/GeneralContext";
import { CreateTaskPanel } from "../CreateTaskPanel/CreateTaskPanel";
import { Panel } from "../Panel/Panel";
function NavBar() {
	const { showPanel } = React.useContext(generalContext);

	return (
		<motion.nav
			className={
				"w-auto h-auto fixed top-2 z-50 inline-flex justify-center items-center"
			}>
			<AnimatePresence>
				{!showPanel ? (
					<motion.div
						initial={{ x: -1500 }}
						animate={{ x: 0 }}
						exit={{ x: 500 }}
						transition={{ ease: "easeOut", duration: 0.5 }}
						className='w-full flex items-center justify-center'
						layout>
						<CreateTaskPanel />
					</motion.div>
				) : (
					<motion.div
						initial={{ x: -1500 }}
						animate={{ x: 0 }}
						exit={{ x: 500 }}
						transition={{ ease: "easeOut", duration: 0.5 }}
						className='w-full flex items-center justify-center'>
						<Panel />
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}

export { NavBar };
