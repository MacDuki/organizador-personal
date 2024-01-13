import "./TaskList.css";

function TaskList({ children }) {
	return (
		<ul
			id='listToDoLeft'
			className='flex flex-col w-72 border-2 border-black h-96 overflow-y-scroll overflow-x-hidden pr-8 p-0 mt-0 mb-0 rounded-b'>
			{children}
		</ul>
	);
}

export { TaskList };
