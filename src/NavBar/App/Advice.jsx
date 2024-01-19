import { motion } from "framer-motion";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { generalContext } from "../../functions/GeneralContext";

const Advice = () => {
	const { showAdvice, setShowAdvice } = React.useContext(generalContext);
	return (
		<div>
			{showAdvice && (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ ease: "easeOut", duration: 0.3 }}
					className=' flex items-center justify-center bg-neavy-b p-4 rounded-md mt-20 md:mt-0'>
					<div className='bg-beige gap-5 flex items-center justify-center flex-col rounded-md shadow-md mr-2'>
						<p className='text-2xl mx-2 py-2'>
							It is not possible to create the same task on the same date.
						</p>
					</div>
					<IoCloseCircleOutline
						className='w-10 h-auto cursor-pointer transform transition-transform  duration-300 hover:scale-110'
						onClick={() => {
							setShowAdvice(false);
						}}
					/>
				</motion.div>
			)}
		</div>
	);
};
export { Advice };
