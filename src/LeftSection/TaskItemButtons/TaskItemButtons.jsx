import React from "react";
import { AiOutlineCloseCircle, AiOutlineReload } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { CiSquareMore } from "react-icons/ci";
import { MdOutlineTaskAlt } from "react-icons/md";
import { generalContext } from "../../functions/GeneralContext";

function TaskItemButtons({
	handleClickCheck,
	handleClickDiscarded,
	handleClickRemoved,
	handleClickEliminate,
	section,
	text,
}) {
	const { detailedTodos } = React.useContext(generalContext);

	function buttonsLogic() {
		if (section === "removed") {
			return (
				<>
					<span
						title='To completed'
						className='button-completed'
						onClick={handleClickCheck()}>
						<MdOutlineTaskAlt className='w-6 h-auto cursor-pointer' />
					</span>
					<span
						title='Restart'
						className='button-restart'
						onClick={handleClickDiscarded()}>
						<AiOutlineReload className='w-6 h-auto cursor-pointer' />
					</span>
					<span
						title='Eliminate'
						className='button-eliminate'
						onClick={handleClickEliminate()}>
						<BsTrash className='w-6 h-auto cursor-pointer' />
					</span>
				</>
			);
		} else if (section === "completed") {
			return (
				<>
					<span
						title='Restart'
						className='button-restart'
						onClick={handleClickDiscarded()}>
						<AiOutlineReload className='w-6 h-auto cursor-pointer' />
					</span>
					<span
						title='Discard'
						className='button-discard'
						onClick={handleClickRemoved()}>
						<AiOutlineCloseCircle className='w-6 h-auto cursor-pointer' />
					</span>
				</>
			);
		} else if (section === "pending") {
			return (
				<>
					<span
						title='To completed'
						className='button-completed'
						onClick={handleClickCheck()}>
						<MdOutlineTaskAlt className='w-6 h-auto cursor-pointer' />
					</span>
					<span
						title='Discard'
						className='button-discard'
						onClick={handleClickRemoved()}>
						<AiOutlineCloseCircle className='w-6 h-auto cursor-pointer' />
					</span>
				</>
			);
		}
	}

	const haveDetailButton = detailedTodos.some((todo) => todo.text === text);

	return (
		<div className='flex flex-row-reverse justify-between items-center'>
			<div className='flex flex-row-reverse items-center'>{buttonsLogic()}</div>
			{haveDetailButton ? (
				<>
					<div className='button-detail-container'>
						<span title='Detail' className='  text-2xl'>
							<CiSquareMore />
						</span>
					</div>
				</>
			) : null}
		</div>
	);
}

export { TaskItemButtons };
