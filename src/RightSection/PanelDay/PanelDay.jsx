import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiOutlineCloseCircle, AiOutlineReload } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineTaskAlt } from "react-icons/md";
import { generalContext } from "../../functions/GeneralContext";
function PanelDay(props) {
	const { handleTodoActions, setShowPanelDay, showPanelDay, dayPanelSelected } =
		React.useContext(generalContext);
	return (
		<AnimatePresence>
			<div className='w-full'>
				{showPanelDay && (
					<motion.article
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						transition={{ ease: "easeOut", duration: 0.35 }}
						className='w-full min-h-96 relative flex flex-col items-center justify-center shadow-calendar rounded-md p-5 overflow-y-scroll  border-2 border-wange'>
						<div className=' w-full h-96'>
							<IoIosCloseCircleOutline
								className='cursor-pointer mx-auto my-5 w-5 h-auto'
								onClick={() => {
									setShowPanelDay(!showPanelDay);
								}}
							/>
							<p>
								FECHA
								{dayPanelSelected}
							</p>
							{props.propertyEventsValues.map((value, index) => (
								<>
									<div
										key={index}
										className='border-2 border-black w-3/4 mx-auto transition duration-500 ease-in-out animate-color-change'
										style={{ backgroundColor: value[3] }}>
										<p>{value[0]}</p>
										{value[4] ? (
											<div className='flex flex-row '>
												Completado
												<AiOutlineReload
													onClick={() => {
														handleTodoActions(value[0], "discarded");
													}}
												/>
												<AiOutlineCloseCircle
													onClick={() => {
														handleTodoActions(value[0], "removed");
													}}
												/>
												<BsTrash
													onClick={() => {
														handleTodoActions(value[0], "eliminate");
													}}
												/>
											</div>
										) : value[5] ? (
											<div className='flex flex-row '>
												Removido
												<BsTrash
													onClick={() => {
														handleTodoActions(value[0], "eliminate");
													}}
												/>
												<MdOutlineTaskAlt
													onClick={() => {
														handleTodoActions(value[0], "check");
													}}
												/>
												<AiOutlineReload
													onClick={() => {
														handleTodoActions(value[0], "discarded");
													}}
												/>
											</div>
										) : (
											<div className='flex flex-row '>
												Pendiente
												<MdOutlineTaskAlt
													onClick={() => {
														handleTodoActions(value[0], "check");
													}}
												/>
												<AiOutlineCloseCircle
													onClick={() => {
														handleTodoActions(value[0], "removed");
													}}
												/>
											</div>
										)}
									</div>
								</>
							))}
						</div>
					</motion.article>
				)}
			</div>
		</AnimatePresence>
	);
}

export { PanelDay };
