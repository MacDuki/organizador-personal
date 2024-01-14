import React from "react";
import { generalContext } from "../../functions/GeneralContext";

function TasksCounter() {
	const { todos, selectedDay } = React.useContext(generalContext);

	const totalTodos = todos.filter(
		(todo) => !todo.removed && todo.date === selectedDay
	).length;
	const totalCompletedTodos = todos.filter(
		(todo) => !!todo.completed && todo.date === selectedDay
	).length;

	return (
		<p className=' select-none tasks-counter'>
			{totalCompletedTodos}/{totalTodos}
		</p>
	);
}

export { TasksCounter };
