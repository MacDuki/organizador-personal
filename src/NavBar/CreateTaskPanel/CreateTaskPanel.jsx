import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { generalContext } from "../../functions/GeneralContext";
import {  motion } from "framer-motion";
import './input.css'

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
     <motion.div 
     initial={{ y: -50 }}
    animate={{ y: 0 }}
    transition={{ ease: "easeOut", duration: 0.3 }}
     className="w-full flex items-center justify-center" >
      <form
      
        className="flex justify-around relative items-center min-w-40 w-auto h-auto border border-black py-4 px-10 gap-10 rounded-full "
        onSubmit={(e) => {
          e.preventDefault();
          createTodo();
          setTimeout(() => {
            handlePanelVisibility();
            setSection("pending");
          }, 100);
        }}
      >
    
      
        <input
          required
          type="text"
          placeholder="Nueva tarea..."
          onChange={(e) => setNewTodoText(e.target.value)}
          value={newTodoText}
          className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-gray-300 focus:ring-0 h-8 w-44 "
        />
      
       


        <div 
      
        className="customCheckBoxHolder flex items-center justify-center gap-5">
          <input type="checkbox" checked={todayTask} id="cCB1" onChange={() => {
                      handleCheckboxDate();
                    }} className="customCheckBoxInput"/>
          <label for="cCB1" class="customCheckBoxWrapper">
              <div className="customCheckBox">
                  <div className="inner">Para hoy</div>
              </div>
          </label>
          {todayTask ? null : (
          <motion.div
          initial={{ x: -50 }}
        animate={{ x:  0}}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className=""
          >
          <input
            className=""
            type="date"
            checked
            onChange={(e) => setFechaIndicada(e.target.value)}
          />
          </motion.div>
        )}
</div>
        
        
        

        <button
          type="submit"
          className=' w-26 px-6 py-2 h-auto border border-black select-none rounded-md'
        >
          Agregar
        </button>



        <div className="relative flex items-center justify-center w-auto h-auto z-50 ml-10">
         <AiOutlineCloseCircle
        onClick={() => {
          handlePanelVisibility();
        }}
        className="w-6 h-auto cursor-pointer"
      />
      </div>
      </form>
      </motion.div>
  );
}

export { CreateTaskPanel };
