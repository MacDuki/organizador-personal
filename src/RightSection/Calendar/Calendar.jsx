import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { useEffect } from "react";
import { generalContext } from "../../functions/GeneralContext";
import "./inputCalendar.css";
function Calendar(props) {
	const {
		todos,
		allPendingTodos,
		allCompletedTodos,
		allRemovedTodos,
		section,
		showPanelDay,
		setShowPanelDay,
	} = React.useContext(generalContext);

	const [allTasks, setAllTasks] = React.useState(true);
	const [calendarEvents, setCalendarEvents] = React.useState();
	useEffect(() => {
		let updatedCalendarList;
		if (allTasks) {
			updatedCalendarList = todos.map(({ text, date, color }) => ({
				title: text,
				date,
				color,
			}));
		} else {
			if (section === "pending") {
				updatedCalendarList = allPendingTodos.map(({ text, date, color }) => ({
					title: text,
					date,
					color,
				}));
			} else if (section === "completed") {
				updatedCalendarList = allCompletedTodos.map(
					({ text, date, color }) => ({
						title: text,
						date,
						color,
					})
				);
			} else {
				updatedCalendarList = allRemovedTodos.map(({ text, date, color }) => ({
					title: text,
					date,
					color,
				}));
			}
		}

		setCalendarEvents(updatedCalendarList);
	}, [
		todos,
		allPendingTodos,
		allCompletedTodos,
		allRemovedTodos,
		section,
		allTasks,
	]);

	let eventsDaySelected;
	let eventsValues;
	const handleDaySelected = (arg) => {
		if (allTasks) {
			eventsDaySelected = todos.filter((todo) => todo.date === arg.dateStr);
		} else {
			if (section === "pending") {
				eventsDaySelected = allPendingTodos.filter(
					(todo) => todo.date === arg.dateStr
				);
			} else if (section === "completed") {
				eventsDaySelected = allCompletedTodos.filter(
					(todo) => todo.date === arg.dateStr
				);
			} else {
				eventsDaySelected = allRemovedTodos.filter(
					(todo) => todo.date === arg.dateStr
				);
			}
		}

		eventsValues = eventsDaySelected.map((event) => [
			event.text,
			event.date,
			event.color,
			event.detailed,
			event.completed,
			event.removed,
		]);
		props.setPropertyEventsValues(eventsValues);

		setShowPanelDay(!showPanelDay);
	};

	useEffect(() => {
		const eventsDaySelected = todos.filter(
			(todo) => todo.date === props.propertyEventsValues[0]?.[1]
		);

		eventsValues = eventsDaySelected.map((event) => [
			event.text,
			event.date,
			event.color,
			event.detailed,
			event.completed,
			event.removed,
		]);
		props.setPropertyEventsValues(eventsValues);
	}, [
		todos,
		allPendingTodos,
		allCompletedTodos,
		allRemovedTodos,
		section,
		eventsValues,
		setShowPanelDay,
		showPanelDay,
	]);

	return (
		<>
			{!showPanelDay && (
				<article className='relative flex flex-col items-center justify-center'>
					<div className='customCheckBoxHolderCalendar absolute top-0 flex items-center justify-center gap-5'>
						<input
							type='checkbox'
							checked={!allTasks}
							id='cCB2'
							onChange={() => {
								setAllTasks(!allTasks);
							}}
							className='customCheckBoxInputCalendar'
						/>
						<label for='cCB2' class='customCheckBoxWrapperCalendar'>
							<div className='customCheckBoxCalendar'>
								<div className='innerCalendar  min-w-48 text-center'>
									Tareas: {section}{" "}
								</div>
							</div>
						</label>
					</div>
					<FullCalendar
						headerToolbar={{
							end: "prev,next",
						}}
						aspectRatio={4}
						plugins={[dayGridPlugin, interactionPlugin]}
						events={calendarEvents}
						height='auto'
						selectable
						eventInteractive
						eventDisplay='list-item'
						dateClick={handleDaySelected}
					/>
				</article>
			)}
		</>
	);
}

export { Calendar };
