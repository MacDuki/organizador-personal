import { GeneralContext } from "./functions/GeneralContext.jsx";
import { LeftApp } from "./LeftSection/App/LeftApp.jsx";
import { RightApp } from "./RightSection/App/RightApp";
import {NavBar} from './NavBar/App/NavBar.jsx'

function PrincipalApp() {
  return (
    <main className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-20 px-5 py-5 ">
      <GeneralContext>
        <NavBar/>
       
        <LeftApp />
        <RightApp />
      
      </GeneralContext>
    </main>
  );
}

export default PrincipalApp;
