import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiOutlineCloseCircle, AiOutlineReload } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineTaskAlt } from "react-icons/md";
import { generalContext } from "../../functions/GeneralContext";
function PanelDay(props) {
	const { handleTodoActions, setShowPanelDay, showPanelDay } =
		React.useContext(generalContext);
	return (
		<AnimatePresence>
			{showPanelDay && (
				<motion.article
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0 }}
					transition={{ ease: "easeOut", duration: 0.35 }}
					className='border-2 border-black'>
					<IoIosCloseCircleOutline
						onClick={() => {
							setShowPanelDay(!showPanelDay);
						}}
					/>
					{props.propertyEventsValues.map((value, index) => (
						<div key={index} className='border-2 border-black'>
							{value}
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
					))}
				</motion.article>
			)}
		</AnimatePresence>
	);
}

export { PanelDay };
