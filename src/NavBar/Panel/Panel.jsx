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

	const partesFecha = selectedDay?.split("-");
	const fechaFormateada = partesFecha?.reverse().join("-");

	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ ease: "easeOut", duration: 0.3 }}
			layout
			className='flex flex-col mt-36 md:mt-0 md:flex-row justify-center items-center relative h-20 '>
			<div className='inline-flex flex-col md:flex-row justify-center items-center relative w-auto mr-2 px-10 py-2 border border-black rounded-2xl bg-wange text-slate-50 '>
				<div className='flex flex-row text-2xl md:text-xl lg:text-2xl items-center gap-1 mb-3 md:mb-0 md:mr-4'>
					<h2 className='select-none left-tittle '>Date:</h2>
					<span
						onClick={() => {
							setSelectDayPanel(!selectDayPanel);
						}}
						className='select-none mr-1 cursor-pointer'>
						{fechaFormateada}
					</span>
					{!selectDayPanel && (
						<MdOutlineDateRange
							className='select-none cursor-pointer'
							onClick={() => {
								setSelectDayPanel(!selectDayPanel);
							}}
						/>
					)}
				</div>
				{selectDayPanel && (
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ ease: "easeOut", duration: 0.3 }}
						className='flex items-center justify-center select-none mb-3 md:mb-0'>
						<input
							type='date'
							className='select-none cursor-pointer rounded-md text-wange bg-beige mr-0 md:mr-1  focus:outline-none'
							onChange={(e) => {
								handleDaySelected(e);
								setSelectDayPanel(!selectDayPanel);
							}}
						/>
						<AiOutlineCloseCircle
							onClick={() => {
								setSelectDayPanel(!selectDayPanel);
							}}
							className='plus-icon w-7 h-auto  ml-3 md:mr-5 md:ml-0 cursor-pointer'
						/>
					</motion.div>
				)}
				<Panel2 />
			</div>
		</motion.div>
	);
}

export { Panel };
