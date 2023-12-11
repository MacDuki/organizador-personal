import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { generalContext } from "../../functions/GeneralContext";

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
    <div>
      {!selectDayPanel ? (
        <div>
          <div className="first-container">
            <span>
              <BsArrowLeftCircle className="arrow-icons" />
            </span>
            <h2 className="left-tittle">date:</h2>
            <span>Today</span>
            <span>
              <BsArrowRightCircle className="arrow-icons" />
            </span>
            <MdOutlineDateRange
              onClick={() => {
                setSelectDayPanel(!selectDayPanel);
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <AiOutlineCloseCircle
            onClick={() => {
              setSelectDayPanel(!selectDayPanel);
            }}
            className="plus-icon"
          />
          <input type="date" onChange={(e) => handleDaySelected(e)} />
        </div>
      )}

      <input placeholder="Buscar ToDoS" className="text-2xl w-full" />
    </div>
  );
}

export { Panel };
