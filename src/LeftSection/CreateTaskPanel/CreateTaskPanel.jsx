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
    <div className="flex flex-col w-60 h-40 relative items-center bg-withe ">
      <AiOutlineCloseCircle
        onClick={() => {
          handlePanelVisibility();
        }}
        className=""
      />
      <form
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
          className="w-60 h-8"
        />
        <label>Para hoy?</label>
        <input
          checked={todayTask}
          id="todayDateCheckbox"
          type="checkbox"
          onChange={() => {
            handleCheckboxDate();
          }}
        />
        {todayTask ? null : (
          <input
            type="date"
            onChange={(e) => setFechaIndicada(e.target.value)}
          />
        )}

        <button
          type="submit"
          className="h-12 w-60"
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
