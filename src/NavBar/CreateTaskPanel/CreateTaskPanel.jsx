import { motion } from "framer-motion";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { generalContext } from "../../functions/GeneralContext";
import "./input.css";

function CreateTaskPanel() {
	const {
		newTodoText,
		setNewTodoText,
		createTodo,
		handlePanelVisibility,
		setSection,
		setTodayTask,
		todayTask,
		setFechaIndicada,
	} = React.useContext(generalContext);

	function handleCheckboxDate() {
		setTodayTask(!todayTask);
	}
	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ ease: "easeOut", duration: 0.35 }}
			className='flex items-center justify-center h-20 '>
			<motion.form
				layout
				className='flex justify-around relative items-center min-w-40 h-auto border-2 bg-neavy-b border-black py-4 px-10 gap-10 rounded-full '
				onSubmit={(e) => {
					e.preventDefault();
					createTodo();
					setTimeout(() => {
						setSection("pending");
					}, 100);
				}}>
				<input
					required
					type='text'
					placeholder='New task ...'
					onChange={(e) => setNewTodoText(e.target.value)}
					value={newTodoText}
					className='bg-transparent border-b border-neavy-b focus:outline-none focus:border-black focus:ring-0 h-8 w-44 placeholder-black '
				/>

				<div className='customCheckBoxHolder flex items-center justify-center gap-5'>
					<input
						type='checkbox'
						checked={todayTask}
						id='cCB1'
						onChange={() => {
							handleCheckboxDate();
						}}
						className='customCheckBoxInput'
					/>
					<label for='cCB1' class='customCheckBoxWrapper'>
						<div className='customCheckBox'>
							<div className='inner'>for today</div>
						</div>
					</label>
					{todayTask ? null : (
						<motion.div
							initial={{ x: -50 }}
							animate={{ x: 0 }}
							transition={{ ease: "easeOut", duration: 0.3 }}
							className=''>
							<input
								className='rounded-md bg-beige'
								type='date'
								checked
								onChange={(e) => setFechaIndicada(e.target.value)}
							/>
						</motion.div>
					)}
				</div>

				<button
					type='submit'
					className=' w-22 px-4 py-1 h-auto border-2 border-black select-none rounded-md'>
					Add
				</button>

				<div className='relative flex items-center justify-center w-auto h-auto z-50 ml-10'>
					<AiOutlineCloseCircle
						onClick={() => {
							handlePanelVisibility();
						}}
						className='w-6 h-auto cursor-pointer'
					/>
				</div>
			</motion.form>
		</motion.div>
	);
}

export { CreateTaskPanel };
