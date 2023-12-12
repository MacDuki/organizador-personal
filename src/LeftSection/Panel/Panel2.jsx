import React, { useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { generalContext } from "../../functions/GeneralContext";

function Panel2() {
  const {
    handlePanelVisibility,
    totalTodos,
    totalCompletedTodos,
    section,
    sectionSetFunction,
  } = React.useContext(generalContext);

  const [forceUpdate, setForceUpdate] = React.useState(0);
  const [tittle, setTittle] = React.useState("Tasks Pending");
  useEffect(() => {
    if (section === "pending") {
      setTittle("Tasks Pending");
    } else if (section === "completed") {
      setTittle("Tasks Completed");
    } else if (section === "removed") {
      setTittle("Removed Tasks");
    }
    setForceUpdate(forceUpdate + 1);
  }, [section]);
  return (
    <>
      <div className="inline-flex flex-col justify-center items-center relative w-60 ">
        <div className="flex flex-row items-center">
          <span>
            <BsArrowLeftCircle
              className="arrow-icons"
              onClick={() => sectionSetFunction.left()}
            />
          </span>
          <h2 className="left-tittle">{tittle}</h2>
          <span>
            <BsArrowRightCircle
              className="arrow-icons"
              onClick={() => sectionSetFunction.right()}
            />
          </span>
        </div>
        <div className="flex flex-row items-center justify-around">
          <h3 className="tasks-counter">
            {totalCompletedTodos}/{totalTodos}
          </h3>
          <AiOutlinePlusCircle
            onClick={() => {
              handlePanelVisibility();
            }}
            className="plus-icon"
          />
        </div>
      </div>
    </>
  );
}

export { Panel2 };
