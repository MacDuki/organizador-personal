import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiOutlineCloseCircle, AiOutlineReload } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineTaskAlt } from "react-icons/md";
import { generalContext } from "../../functions/GeneralContext";
import { TasksCounterPanelDay } from "./TaskCounterPanelDay";
function PanelDay(props) {
	const { handleTodoActions, setShowPanelDay, showPanelDay, dayPanelSelected } =
		React.useContext(generalContext);

	const partesFecha = dayPanelSelected?.split("-");
	const fechaFormateada = partesFecha?.reverse().join("-");
	return (
		<AnimatePresence>
			<div className='w-full'>
				{showPanelDay && (
					<motion.article
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						transition={{ ease: "easeOut", duration: 0.35 }}
						className='w-full min-h-96 relative flex flex-col items-center justify-center shadow-calendar rounded-md px-2 py-2 overflow-y-scroll  border-2 border-wange'>
						<div className='  w-full mx-auto h-96'>
							<div className='w-full  md:w-2/3   mb-8 mx-auto'>
								<div className='flex items-center justify-around bg-wange rounded-md px-2 py-1'>
									<IoIosCloseCircleOutline
										className='cursor-pointer w-7 h-auto text-beige transform transition-transform  duration-300 hover:scale-125'
										onClick={() => {
											setShowPanelDay(!showPanelDay);
										}}
									/>
									<TasksCounterPanelDay />
									<div className='flex gap-1 items-center justify-center text-beige '>
										<p className='text-2xl'> Date:</p>
										<p className='text-2xl'>{fechaFormateada}</p>
									</div>
								</div>
							</div>

							{props.propertyEventsValues.map((value, index) => (
								<div
									key={index}
									className='border-2 border-black w-3/4 mx-auto transition duration-500 ease-in-out animate-color-change mb-1 rounded-md px-2'
									style={{ backgroundColor: value[3] }}>
									<p className='text-2xl inline'>{value[0]}</p>
									{value[4] ? (
										<div className='flex flex-row items-center gap-5 justify-end'>
											<div className='flex w-auto '>
												<AiOutlineReload
													onClick={() => {
														handleTodoActions(value[0], "discarded");
													}}
													className='w-6 h-auto transform transition-transform  duration-300 hover:scale-125 cursor-pointer'
												/>
												<AiOutlineCloseCircle
													onClick={() => {
														handleTodoActions(value[0], "removed");
													}}
													className='w-6 h-auto transform transition-transform  duration-300 hover:scale-125 cursor-pointer'
												/>
												<BsTrash
													onClick={() => {
														handleTodoActions(value[0], "eliminate");
													}}
													className='w-6 h-auto transform transition-transform  duration-300 hover:scale-125 cursor-pointer'
												/>
											</div>
										</div>
									) : value[5] ? (
										<div className='flex flex-row items-center gap-5 justify-end'>
											<div className='flex w-auto  '>
												<BsTrash
													onClick={() => {
														handleTodoActions(value[0], "eliminate");
													}}
													className='w-6 h-auto transform transition-transform  duration-300 hover:scale-125 cursor-pointer'
												/>
												<MdOutlineTaskAlt
													onClick={() => {
														handleTodoActions(value[0], "check");
													}}
													className='w-6 h-auto transform transition-transform  duration-300 hover:scale-125 cursor-pointer'
												/>
												<AiOutlineReload
													onClick={() => {
														handleTodoActions(value[0], "discarded");
													}}
													className='w-6 h-auto transform transition-transform  duration-300 hover:scale-125 cursor-pointer'
												/>
											</div>
										</div>
									) : (
										<div className='flex flex-row items-center gap-5 justify-end'>
											<div className='flex w-auto  '>
												<MdOutlineTaskAlt
													onClick={() => {
														handleTodoActions(value[0], "check");
													}}
													className='w-6 h-auto transform transition-transform  duration-300 hover:scale-125 cursor-pointer'
												/>
												<AiOutlineCloseCircle
													onClick={() => {
														handleTodoActions(value[0], "removed");
													}}
													className='w-6 h-auto transform transition-transform  duration-300 hover:scale-125 cursor-pointer'
												/>
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					</motion.article>
				)}
			</div>
		</AnimatePresence>
	);
}

export { PanelDay };
