import { LeftApp } from "./LeftSection/App/LeftApp.jsx";
import { NavBar } from "./NavBar/App/NavBar.jsx";
import { RightApp } from "./RightSection/App/RightApp";
import { GeneralContext } from "./functions/GeneralContext.jsx";

function PrincipalApp() {
	return (
		<main className='w-full min-h-screen flex flex-col justify-center  bg-beige  '>
			<GeneralContext>
				<NavBar />
				<section className='flex justify-center items-start gap-20 px-5 py-5'>
					<LeftApp />
					<RightApp />
				</section>
			</GeneralContext>
		</main>
	);
}

export default PrincipalApp;
