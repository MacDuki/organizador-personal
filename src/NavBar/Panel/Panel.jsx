import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { generalContext } from "../../functions/GeneralContext";
import { Panel2 } from "./Panel2";
import {motion, AnimatePresence} from 'framer-motion'
function Panel() {
  const {
    selectDayPanel,
    setSelectDayPanel,
    setSelectedDay,
  } = React.useContext(generalContext);

  const handleDaySelected = (arg) => {
    setSelectedDay(arg.target.value);
    setSelectDayPanel(!selectDayPanel);
  };

  useEffect(() => {
    const fecha = new Date();

    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const dia = String(fecha.getDate()).padStart(2, "0");

    const fechaFormateada = `${año}-${mes}-${dia}`;
    setSelectedDay(fechaFormateada);
  }, []);

  return (
    
    <motion.div
    initial={{ y: -50 }}
    animate={{ y: 0 }}
   
    transition={{ ease: "easeOut", duration: 0.3 }}
    className="flex flex-row justify-center items-center relative w-full  h-auto ">
      {!selectDayPanel ? (
        <div className="inline-flex flex-col md:flex-row justify-center items-center relative w-auto mr-2 px-10 py-2 border border-black rounded-2xl ">
          <div className="flex flex-row items-center gap-2">
            <h2 className="select-none left-tittle">date:</h2>
            <span className="select-none">Today</span>
            <MdOutlineDateRange
            className="select-none cursor-pointer"
              onClick={() => {
                setSelectDayPanel(!selectDayPanel);
              }}
            />
          </div>
          <Panel2 />
        </div>
      ) : (
        <motion.div 
        initial={{ scale: 0 }}
    animate={{ scale: 1 }}
   
    transition={{ ease: "easeOut", duration: 0.3 }}
        className="flex items-center justify-center select-none">
          <AiOutlineCloseCircle
            onClick={() => {
              setSelectDayPanel(!selectDayPanel);
            }}
            className="plus-icon mr-5 cursor-pointer"
          />
          <input type="date" className="select-none cursor-pointer" onChange={(e) => handleDaySelected(e)} />
        </motion.div>
      )}

    </motion.div>

  );
}

export { Panel };
