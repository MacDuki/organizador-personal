import { TaskItemButtons } from "../TaskItemButtons/TaskItemButtons";

function TaskItem({
  text,
  handleClickCheck,
  handleClickDiscarded,
  handleClickRemoved,
  handleClickEliminate,
  section,
}) {
  return (
    <li className=" list-none flex flex-col border-2 border-black w-64 ">
      <p className="  select-none text-2xl">{text}</p>
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
