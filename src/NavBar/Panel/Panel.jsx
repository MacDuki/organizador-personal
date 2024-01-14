import { motion } from "framer-motion";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { generalContext } from "../../functions/GeneralContext";
import { Panel2 } from "./Panel2";
function Panel() {
	const { selectDayPanel, setSelectDayPanel, setSelectedDay, selectedDay } =
		React.useContext(generalContext);

	const handleDaySelected = (arg) => {
		setSelectedDay(arg.target.value);
	};

	return (
		<motion.div
			initial={{ y: -50 }}
			animate={{ y: 0 }}
			transition={{ ease: "easeOut", duration: 0.3 }}
			layout
			className='flex flex-row justify-center items-center relative h-auto '>
			<div className='inline-flex flex-col md:flex-row justify-center items-center relative w-auto mr-2 px-10 py-2 border border-black rounded-2xl bg-wange text-slate-50 '>
				<div className='flex flex-row items-center gap-1 mr-4'>
					<h2 className='select-none left-tittle '>Date:</h2>
					<span
						onClick={() => {
							setSelectDayPanel(!selectDayPanel);
						}}
						className='select-none mr-1 cursor-pointer'>
						{selectedDay}
					</span>
					<MdOutlineDateRange
						className='select-none cursor-pointer'
						onClick={() => {
							setSelectDayPanel(!selectDayPanel);
						}}
					/>
				</div>
				{selectDayPanel && (
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ ease: "easeOut", duration: 0.3 }}
						className='flex items-center justify-center select-none gap2'>
						<input
							type='date'
							className='select-none cursor-pointer rounded-md text-wange bg-beige mr-1  focus:outline-none'
							onChange={(e) => {
								handleDaySelected(e);
								setSelectDayPanel(!selectDayPanel);
							}}
						/>
						<AiOutlineCloseCircle
							onClick={() => {
								setSelectDayPanel(!selectDayPanel);
							}}
							className='plus-icon mr-5 cursor-pointer'
						/>
					</motion.div>
				)}
				<Panel2 />
			</div>
		</motion.div>
	);
}

export { Panel };
