import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { generalContext } from "../../functions/GeneralContext";
import { Panel2 } from "./Panel2";
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
    <div className="flex flex-row justify-center items-center relative w-1/2  h-auto bg-red-600">
      {!selectDayPanel ? (
        <div className="inline-flex flex-col md:flex-row justify-center items-center relative w-auto px-10 py-2 border border-black rounded-2xl ">
          <div className="flex flex-row items-center gap-2">
            <h2 className="select-none left-tittle">date:</h2>
            <span className="select-none">Today</span>
            <MdOutlineDateRange
              onClick={() => {
                setSelectDayPanel(!selectDayPanel);
              }}
            />
          </div>
          <Panel2 />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <AiOutlineCloseCircle
            onClick={() => {
              setSelectDayPanel(!selectDayPanel);
            }}
            className="plus-icon"
          />
          <input type="date" onChange={(e) => handleDaySelected(e)} />
        </div>
      )}

    </div>
  );
}

export { Panel };
