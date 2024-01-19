import "./TaskList.css";

function TaskList({ children }) {
	return (
		<ul
			id='listToDoLeft'
			className='flex flex-col  min-h-52  max-h-80 h-auto w-72 border-2 border-black  overflow-y-scroll overflow-x-hidden pr-8 p-0 mt-0 mb-0 rounded-b shadow-calendar'>
			{children}
		</ul>
	);
}

export { TaskList };
