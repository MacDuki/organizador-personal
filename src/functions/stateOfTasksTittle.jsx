import { useEffect } from "react"
import { GeneralContext
 } from "./GeneralContext"
function stateOfTasksTittle () {
    const {
       
        section,
       
      } = React.useContext(generalContext);

      const [forceUpdate, setForceUpdate] = React.useState(0);
      const [tittle, setTittle] = React.useState("Tasks Pending");
      useEffect(() => {
        if (section === "pending") {
          setTittle("Tasks Pending");
          return ( <motion.h2 
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
           className="select-none left-tittle mx-2">{tittle}</motion.h2>)
        } else if (section === "completed") {
          setTittle("Tasks Completed");
          return ( <motion.h2 
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
           className="select-none left-tittle mx-2">{tittle}</motion.h2>)
        } else if (section === "removed") {
          setTittle("Removed Tasks");
          return ( <motion.h2 
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
           className="select-none left-tittle mx-2">{tittle}</motion.h2>)
        }
        setForceUpdate(forceUpdate + 1);
      }, [section]);

}

export {stateOfTasksTittle}