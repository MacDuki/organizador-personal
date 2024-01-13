import { useContext, useEffect, useState } from "react";
import { generalContext } from "../../functions/GeneralContext";
import { TaskItemButtons } from "../TaskItemButtons/TaskItemButtons";

function TaskItem({
	text,
	handleClickCheck,
	handleClickDiscarded,
	handleClickRemoved,
	handleClickEliminate,
	section,
}) {
	const { allCompletedTodos, allRemovedTodos } = useContext(generalContext);
	const [backGroundColorVariable, setBackGroundColorVariable] =
		useState("bg-transparent");
	useEffect(() => {
		if (section === "completed") {
			setBackGroundColorVariable("bg-greenPastel");
		} else if (section === "removed") {
			setBackGroundColorVariable("bg-redPastel");
		} else if (section === "pending") {
			setBackGroundColorVariable("bg-transparent");
		}
	}, [allCompletedTodos, allRemovedTodos]);

	return (
		<li
			className={`list-none flex flex-col border-2 border-black ${backGroundColorVariable} w-64`}>
			<p className='  select-none text-2xl'>{text}</p>
			<TaskItemButtons
				text={text}
				section={section}
				handleClickRemoved={() => handleClickRemoved}
				handleClickCheck={() => handleClickCheck}
				handleClickDiscarded={() => handleClickDiscarded}
				handleClickEliminate={() => handleClickEliminate}
			/>
		</li>
	);
}
export { TaskItem };
