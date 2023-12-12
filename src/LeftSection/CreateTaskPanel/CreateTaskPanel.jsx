import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { generalContext } from "../../functions/GeneralContext";

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
    <div className="flex flex-col w-60 h-full relative items-center justify-center bg-withe border-2 border-black px-10 py-3">
      <AiOutlineCloseCircle
        onClick={() => {
          handlePanelVisibility();
        }}
        className=""
      />
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          createTodo();
          setTimeout(handlePanelVisibility(), 100);
          setSection("pending");
        }}
      >
        <input
          required
          type="text"
          placeholder="Nueva tarea..."
          onChange={(e) => setNewTodoText(e.target.value)}
          value={newTodoText}
          className=" h-8"
        />
        <label>Para hoy?</label>
        <input
          checked={todayTask}
          id="todayDateCheckbox"
          type="checkbox"
          className="mt-1"
          onChange={() => {
            handleCheckboxDate();
          }}
        />
        {todayTask ? null : (
          <input
            className="mt-5"
            type="date"
            onChange={(e) => setFechaIndicada(e.target.value)}
          />
        )}

        <button
          type="submit"
          className="h-12 border-2 border-black mt-4 w-32  text-xl"
          onClick={() => {
            createTodo();
            setTimeout(handlePanelVisibility(), 100);
            setSection("pending");
          }}
        >
          Agregar
        </button>
      </form>
    </div>
  );
}

export { CreateTaskPanel };
