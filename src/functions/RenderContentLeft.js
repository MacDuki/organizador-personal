import React from "react";
import { generalContext } from ".";
import { CreateTaskPanel } from "../LeftSection/CreateTaskPanel/CreateTaskPanel";

import { Panel } from "../LeftSection/Panel/Panel";
import { TaskList } from "../LeftSection/TaskList/TaskList";

function RenderContentLeft() {
  const {
    showPanel,
    formVisibility,
    loading,
    error,
    todos,
    section,
    sectionComponents,
  } = React.useContext(generalContext);
  if (formVisibility) {
  } else {
    if (showPanel === true) {
      return <CreateTaskPanel />;
    } else {
      return (
        <>
          <Panel />
          <TaskList>
            {loading ? <p>Cargando ...</p> : null}
            {error ? <p>Hay un error fatal</p> : null}
            {!loading && todos.length < 1 ? <p>Crea tu primer Todo</p> : null}
            {!loading && todos.length >= 1
              ? sectionComponents[section]()
              : null}
          </TaskList>
        </>
      );
    }
  }
}
export { RenderContentLeft };
