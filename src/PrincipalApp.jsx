import { GeneralContext } from "./functions/GeneralContext.jsx";
import { LeftApp } from "./LeftSection/App/LeftApp.jsx";
import { RightApp } from "./RightSection/App/RightApp";

function PrincipalApp() {
  return (
    <main className="w-full h-auto flex flex-row items-center justify-center gap-20 px-5 py-5">
      <GeneralContext>
        <LeftApp />
        <RightApp />
      </GeneralContext>
    </main>
  );
}

export default PrincipalApp;
