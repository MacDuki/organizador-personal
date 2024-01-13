import { LeftApp } from "./LeftSection/App/LeftApp.jsx";
import { NavBar } from "./NavBar/App/NavBar.jsx";
import { RightApp } from "./RightSection/App/RightApp";
import { GeneralContext } from "./functions/GeneralContext.jsx";

function PrincipalApp() {
	return (
		<main className='w-full min-h-screen flex flex-col md:flex-row items-start justify-center gap-20 px-5 py-5 bg-beige '>
			<GeneralContext>
				<NavBar />
				<LeftApp />
				<RightApp />
			</GeneralContext>
		</main>
	);
}

export default PrincipalApp;
