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
			setTittle("Pending tasks");
		} else if (section === "completed") {
			setTittle("Completed tasks");
		} else if (section === "removed") {
			setTittle("Removed tasks");
		}
		setForceUpdate(forceUpdate + 1);
	}, [section]);
	return (
		<>
			<div className='inline-flex flex-col justify-center gap-3 md:gap-5 items-center relative w-auto md:flex-row '>
				<div className='flex flex-row items-center text-2xl justify-center'>
					<span>
						<BsArrowLeftCircle
							className='arrow-icons cursor-pointer w-7 md:w-5 h-auto transform transition-transform  duration-300 hover:scale-125'
							onClick={() => sectionSetFunction.left()}
						/>
					</span>

					<motion.h2
						key={forceUpdate}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ ease: "easeOut", duration: 0.3 }}
						className='select-none left-tittle mx-4 md:mx-2'>
						{tittle}
					</motion.h2>
					<span>
						<BsArrowRightCircle
							className='arrow-icons cursor-pointer w-7 md:w-5 h-auto transform transition-transform  duration-300 hover:scale-125'
							onClick={() => sectionSetFunction.right()}
						/>
					</span>
				</div>
				<div className='flex flex-row items-center justify-around gap-10 md:gap-2 text-2xl'>
					<TasksCounter />
					<AiOutlinePlusCircle
						onClick={() => {
							handlePanelVisibility();
						}}
						className='plus-icon cursor-pointer w-6 h-auto transform transition-transform  duration-300 hover:scale-125'
					/>
				</div>
			</div>
		</>
	);
}

export { Panel2 };
