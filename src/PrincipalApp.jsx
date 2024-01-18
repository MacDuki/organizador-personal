import { LeftApp } from "./LeftSection/App/LeftApp.jsx";
import { NavBar } from "./NavBar/App/NavBar.jsx";
import { RightApp } from "./RightSection/App/RightApp";
import { GeneralContext } from "./functions/GeneralContext.jsx";

function PrincipalApp() {
	return (
		<main className='w-full min-h-screen flex flex-col justify-center  bg-beige  '>
			<GeneralContext>
				<NavBar />
				<section className='flex flex-col md:flex-row h-auto justify-center items-center mt-20 md:mt-0 md:items-start gap-20 px-5 py-2'>
					<LeftApp />
					<RightApp />
				</section>
			</GeneralContext>
		</main>
	);
}

export default PrincipalApp;
