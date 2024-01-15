import React from "react";
import { Calendar } from "../Calendar/Calendar";
import { PanelDay } from "../PanelDay/PanelDay";

function RightApp() {
	const [propertyEventsValues, setPropertyEventsValues] = React.useState([]);

	return (
		<section className='flex flex-col items-center justify-center w-full mt-20 py-10 md:w-1/2 md:py-0 h-auto'>
			<Calendar
				propertyEventsValues={propertyEventsValues}
				setPropertyEventsValues={setPropertyEventsValues}
			/>
			<PanelDay propertyEventsValues={propertyEventsValues} />
		</section>
	);
}

export { RightApp };
