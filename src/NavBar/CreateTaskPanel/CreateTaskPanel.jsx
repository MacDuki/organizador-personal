import { motion } from "framer-motion";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { generalContext } from "../../functions/GeneralContext";
import "./button.css";
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
			className='flex items-center justify-center h-20 w-3/4 md:w-auto mt-40 md:mt-0 '>
			<motion.form
				layout
				className='flex flex-col md:flex-row w-full justify-around relative items-center min-w-40 h-auto border-2 bg-neavy-b border-black py-2 md:py-4 gap-5 md:px-10 gap-10 rounded-xl '
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
					onChange={(e) => {
						setNewTodoText(e.target.value);
					}}
					value={newTodoText}
					className='text-xl bg-transparent border-b border-neavy-b focus:outline-none focus:placeholder:text-transparent focus:border-black focus:ring-0 h-10 text-center md:h-8 w-full md:w-44 placeholder-black '
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
				<div className='flex gap-10 '>
					{newTodoText.length >= 1 && (
						<button className='button' type='submit'>
							<span className='button__text'>Add task</span>
							<span className='button__icon'>
								<svg
									className='svg'
									fill='none'
									height='24'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									viewBox='0 0 24 24'
									width='24'
									xmlns='http://www.w3.org/2000/svg'>
									<line x1='12' x2='12' y1='5' y2='19'></line>
									<line x1='5' x2='19' y1='12' y2='12'></line>
								</svg>
							</span>
						</button>
					)}

					<div className='relative flex items-center justify-center w-auto h-auto z-50 ml-0 md:ml-10'>
						<AiOutlineCloseCircle
							onClick={() => {
								handlePanelVisibility();
							}}
							className='w-6 h-auto cursor-pointer transform transition-transform  duration-300 hover:scale-125'
						/>
					</div>
				</div>
			</motion.form>
		</motion.div>
	);
}

export { CreateTaskPanel };
