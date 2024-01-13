import { motion } from "framer-motion";
import { React, useContext, useEffect, useState } from "react";
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
	const [forceUpdateLi, setForceUpdateLi] = useState(0);

	useEffect(() => {
		if (section === "completed") {
			setBackGroundColorVariable("bg-greenPastel");
		} else if (section === "removed") {
			setBackGroundColorVariable("bg-redPastel");
		} else if (section === "pending") {
			setBackGroundColorVariable("bg-beige");
		}
		setForceUpdateLi(forceUpdateLi + 1);
	}, [allCompletedTodos, allRemovedTodos, section]);

	return (
		<motion.li
			initial={{ y: -50 }}
			animate={{ y: 0 }}
			key={forceUpdateLi}
			transition={{ ease: "easeOut", duration: 0.3 }}
			className={`list-none flex flex-col px-2 border-2 border-black ${backGroundColorVariable} w-64`}>
			<p className='  select-none text-2xl'>{text}</p>
			<TaskItemButtons
				text={text}
				section={section}
				handleClickRemoved={() => handleClickRemoved}
				handleClickCheck={() => handleClickCheck}
				handleClickDiscarded={() => handleClickDiscarded}
				handleClickEliminate={() => handleClickEliminate}
			/>
		</motion.li>
	);
}
export { TaskItem };
