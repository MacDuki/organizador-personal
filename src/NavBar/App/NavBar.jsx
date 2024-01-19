import { motion } from "framer-motion";
import React from "react";
import { generalContext } from "../../functions/GeneralContext";
import { CreateTaskPanel } from "../CreateTaskPanel/CreateTaskPanel";
import { Panel } from "../Panel/Panel";
import { Advice } from "./Advice";
function NavBar() {
	const { showPanel, showAdvice } = React.useContext(generalContext);

	return (
		<motion.nav
			className={
				"w-auto h-10  mt-5 relative z-50 inline-flex justify-center items-center"
			}>
			{showAdvice ? <Advice /> : !showPanel ? <CreateTaskPanel /> : <Panel />}
		</motion.nav>
	);
}

export { NavBar };
