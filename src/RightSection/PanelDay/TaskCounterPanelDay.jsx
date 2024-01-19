import React from "react";
import { generalContext } from "../../functions/GeneralContext";

function TasksCounterPanelDay() {
	const { todos, dayPanelSelected } = React.useContext(generalContext);

	const totalTodos = todos.filter(
		(todo) => !todo.removed && todo.date === dayPanelSelected
	).length;
	const totalCompletedTodos = todos.filter(
		(todo) => !!todo.completed && todo.date === dayPanelSelected
	).length;

	return (
		<p className=' select-none tasks-counter text-beige text-2xl'>
			{totalCompletedTodos}/{totalTodos}
		</p>
	);
}

export { TasksCounterPanelDay };
