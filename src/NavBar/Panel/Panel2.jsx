import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { generalContext } from "../../functions/GeneralContext";
import { TasksCounter } from "./TasksCounter";
function Panel2() {
	const { handlePanelVisibility, section, sectionSetFunction } =
		React.useContext(generalContext);

	const [forceUpdate, setForceUpdate] = React.useState(0);
	const [tittle, setTittle] = React.useState("Tasks Pending");
	useEffect(() => {
		if (section === "pending") {
			setTittle("Tasks Pending");
		} else if (section === "completed") {
			setTittle("Tasks Completed");
		} else if (section === "removed") {
			setTittle("Removed Tasks");
		}
		setForceUpdate(forceUpdate + 1);
	}, [section]);
	return (
		<>
			<div className='inline-flex flex-col justify-center gap-5 items-center relative w-auto md:flex-row '>
				<div className='flex flex-row items-center  justify-center'>
					<span>
						<BsArrowLeftCircle
							className='arrow-icons cursor-pointer w-5 h-auto'
							onClick={() => sectionSetFunction.left()}
						/>
					</span>

					<motion.h2
						key={forceUpdate}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ ease: "easeOut", duration: 0.3 }}
						className='select-none left-tittle mx-2'>
						{tittle}
					</motion.h2>
					<span>
						<BsArrowRightCircle
							className='arrow-icons cursor-pointer w-5 h-auto'
							onClick={() => sectionSetFunction.right()}
						/>
					</span>
				</div>
				<div className='flex flex-row items-center justify-around gap-1'>
					<TasksCounter />
					<AiOutlinePlusCircle
						onClick={() => {
							handlePanelVisibility();
						}}
						className='plus-icon cursor-pointer w-6 h-auto'
					/>
				</div>
			</div>
		</>
	);
}

export { Panel2 };
