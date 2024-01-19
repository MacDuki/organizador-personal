import { motion } from "framer-motion";
import React from "react";
import { generalContext } from "../../functions/GeneralContext";
import "./SearchingTodayInput.css";
function SearchingTasks() {
	const { searchValue, setSearchValue, searchToday, setSearchToday } =
		React.useContext(generalContext);

	return (
		<motion.div
			layout
			className='w-full flex flex-col items-center justify-center'>
			{searchValue.length >= 1 && (
				<div className='customCheckBoxHolder flex items-center justify-center gap-5'>
					<input
						type='checkbox'
						checked={searchToday}
						id='cCB1'
						onChange={() => {
							setSearchToday(!searchToday);
						}}
						className='customCheckBoxInput'
					/>
					<label for='cCB1' class='customCheckBoxWrapper'>
						<div className='customCheckBox'>
							<div className='inner'>for today</div>
						</div>
					</label>
				</div>
			)}
			<input
				placeholder='Search'
				className='text-xl w-full bg-wange rounded-t text-slate-50 px-2 py-1 placeholder:text-slate-50 placeholder:text-center focus:placeholder-transparent focus:outline-none '
				onChange={(e) => {
					setSearchValue(e.target.value.toLowerCase());
				}}
			/>
		</motion.div>
	);
}

export { SearchingTasks };
