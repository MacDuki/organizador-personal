import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { SearchingTasks } from "../LeftSection/SearchingTasks/SearchingTasks";
import { TaskItem } from "../LeftSection/TaskItem/TaskItem";
import { TaskList } from "../LeftSection/TaskList/TaskList";
import { useLocalStorage } from "../functions/useLocalStorage";
import "./loader.css";
const generalContext = React.createContext();

function GeneralContext({ children }) {
	const {
		item: todos,
		saveLocalStorage,
		error,
		loading,
	} = useLocalStorage("TODOS-V1", []);

	const allPendingTodos = todos.filter(
		(todo) => !todo.completed && !todo.removed
	);
	const allCompletedTodos = todos.filter(
		(todo) => todo.completed && !todo.removed
	);
	const allRemovedTodos = todos.filter((todo) => todo.removed);

	const handleTodoActions = (text, action) => {
		const updateTodos = [...todos];
		const todoIndex = updateTodos.findIndex((todo) => todo.text === text);

		if (action === "check") {
			updateTodos[todoIndex].completed = true;
			updateTodos[todoIndex].removed = false;
			updateTodos[todoIndex].color = "#52976f";
			updateTodos[todoIndex].section = "completed";
		} else if (action === "discarded") {
			updateTodos[todoIndex].completed = false;
			updateTodos[todoIndex].removed = false;
			updateTodos[todoIndex].color = "#F9C80E";
			updateTodos[todoIndex].section = "pending";
		} else if (action === "removed") {
			updateTodos[todoIndex].completed = false;
			updateTodos[todoIndex].removed = true;
			updateTodos[todoIndex].section = "removed";
			updateTodos[todoIndex].color = "#FC5130";
		} else if (action === "eliminate") {
			const updatedTodos = updateTodos.filter((todo) => todo.text !== text);
			saveLocalStorage(updatedTodos);
			return;
		}

		saveLocalStorage(updateTodos);
	};

	const sectionComponents = {
		pending: () =>
			allPendingTodos
				.filter((todo) => todo.date === selectedDay)
				.map((todo) => (
					<TaskItem
						key={todo.id}
						section={todo.section}
						text={todo.text}
						handleClickCheck={() => handleTodoActions(todo.text, "check")}
						handleClickRemoved={() => handleTodoActions(todo.text, "removed")}
					/>
				)),
		completed: () =>
			allCompletedTodos
				.filter((todo) => todo.date === selectedDay)
				.map((todo) => (
					<TaskItem
						key={todo.id}
						section={todo.section}
						text={todo.text}
						handleClickRemoved={() => handleTodoActions(todo.text, "removed")}
						handleClickDiscarded={() =>
							handleTodoActions(todo.text, "discarded")
						}
					/>
				)),
		removed: () =>
			allRemovedTodos
				.filter((todo) => todo.date === selectedDay)
				.map((todo) => (
					<TaskItem
						key={todo.id}
						section={todo.section}
						text={todo.text}
						handleClickCheck={() => handleTodoActions(todo.text, "check")}
						handleClickDiscarded={() =>
							handleTodoActions(todo.text, "discarded")
						}
						handleClickEliminate={() =>
							handleTodoActions(todo.text, "eliminate")
						}
					/>
				)),
		results: () =>
			searchValue.trim() !== "" && !searchToday
				? todos
						.filter((todo) => todo.text.toLowerCase().startsWith(searchValue))

						.map((todo) => (
							<TaskItem key={todo.id} section={todo.section} text={todo.text} />
						))
				: searchValue.trim() !== "" && searchToday
				? todos
						.filter((todo) => todo.text.toLowerCase().startsWith(searchValue))
						.filter((todo) => todo.date === selectedDay)
						.map((todo) => (
							<TaskItem key={todo.id} section={todo.section} text={todo.text} />
						))
				: "No hay resultados",
	};

	// logica para secciones
	const [section, setSection] = React.useState("pending");

	const sectionSetFunction = {
		right: () =>
			setSection((prevSection) =>
				prevSection === "removed"
					? "pending"
					: prevSection === "pending"
					? "completed"
					: "removed"
			),
		left: () =>
			setSection((prevSection) =>
				prevSection === "completed"
					? "pending"
					: prevSection === "removed"
					? "completed"
					: "removed"
			),
	};

	// Logica para crear Todos simples
	const [todayTask, setTodayTask] = React.useState(true);

	const [newTodoText, setNewTodoText] = React.useState("");
	const [newTodoTextArea, setNewTodoTextArea] = React.useState("");
	const [fechaIndicada, setFechaIndicada] = React.useState();
	function obtenerFechaActual() {
		const fecha = new Date();

		const año = fecha.getFullYear();
		const mes = String(fecha.getMonth() + 1).padStart(2, "0");
		const dia = String(fecha.getDate()).padStart(2, "0");

		const fechaFormateada = `${año}-${mes}-${dia}`;
		return todayTask ? fechaFormateada : fechaIndicada;
	}

	const createTodo = (detailedFlag) => {
		const updatedTodos = [...todos];

		const nuevoTodo = {
			text: newTodoText,
			date: obtenerFechaActual(),
			allDay: true,
			color: "#F9C80E",
			completed: false,
			removed: false,
			detailed: detailedFlag,
			textArea: newTodoTextArea,
		};

		if (newTodoText.trim().length === 0) {
		} else if (
			!updatedTodos.some(
				(todo) =>
					todo.text === newTodoText && todo.date === obtenerFechaActual()
			)
		) {
			updatedTodos.push(nuevoTodo);
			saveLocalStorage(updatedTodos);
			setNewTodoText("");
		} else {
			setNewTodoText("");
			setShowAdvice(true);
		}
	};

	// Logica de todos detallados
	const detailedTodos = todos.filter((todo) => todo.detailed);
	function handleDetailedTodoForm() {
		if (newTodoTextArea.length > 1) {
			detailedFlag = true;
		} else {
			detailedFlag = false;
		}
		createTodo(detailedFlag);
		setNewTodoTextArea("");
		setNewTodoText("");
	}

	const [showTextArea, setShowTextArea] = React.useState(false);
	function handleTextAreaChange(event) {
		setNewTodoTextArea(event.target.value);
	}
	function handleNewTodoText(event) {
		setNewTodoText(event.target.value);
	}

	// rome-ignore lint/style/useConst: <explanation>
	let detailedFlag = false;

	///

	const [showPanel, setShowPanel] = React.useState(true);
	const handlePanelVisibility = () => {
		setShowPanel((state) => !state);
	};

	function renderContent() {
		return (
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ ease: "easeOut", duration: 0.35 }}
				className=' max-h-80 h-auto '>
				<SearchingTasks />
				<TaskList>
					{loading && (
						<div
							aria-label='Orange and tan hamster running in a metal wheel '
							role='img'
							className='wheel-and-hamster mx-auto '>
							<div className='wheel'></div>
							<div className='hamster'>
								<div className='hamster__body'>
									<div className='hamster__head'>
										<div className='hamster__ear'></div>
										<div className='hamster__eye'></div>
										<div className='hamster__nose'></div>
									</div>
									<div className='hamster__limb hamster__limb--fr'></div>
									<div className='hamster__limb hamster__limb--fl'></div>
									<div className='hamster__limb hamster__limb--br'></div>
									<div className='hamster__limb hamster__limb--bl'></div>
									<div className='hamster__tail'></div>
								</div>
							</div>
							<div className='spoke'></div>
						</div>
					)}
					{error && <img src='./error.gif' />}
					{!loading && todos.length < 1 && (
						<div className='object-contain p-10'>
							<img src='src\functions\firstTasks.svg' className='w-50 h-auto' />
						</div>
					)}
					{!loading && todos.length >= 1 && searchValue.length <= 0
						? sectionComponents[section]() /*Linea 214*/
						: !loading && todos.length >= 1 && searchValue.length >= 1
						? sectionComponents["results"]()
						: null}
				</TaskList>
			</motion.div>
		);
	}

	const [searchValue, setSearchValue] = React.useState("");
	const [searchToday, setSearchToday] = React.useState(false);

	useEffect(() => {
		const fecha = new Date();

		const año = fecha.getFullYear();
		const mes = String(fecha.getMonth() + 1).padStart(2, "0");
		const dia = String(fecha.getDate()).padStart(2, "0");

		const fechaFormateada = `${año}-${mes}-${dia}`;
		setSelectedDay(fechaFormateada);
	}, []);

	const [selectDayPanel, setSelectDayPanel] = React.useState(false);
	const [selectedDay, setSelectedDay] = React.useState();
	const [dayPanelSelected, setDayPanelSelected] = React.useState();

	const [showPanelDay, setShowPanelDay] = React.useState(false);
	const [showAdvice, setShowAdvice] = React.useState(false);

	return (
		<generalContext.Provider
			value={{
				renderContent,
				handlePanelVisibility,
				showPanel,
				section,
				sectionSetFunction,
				newTodoText,
				setNewTodoText,
				createTodo,
				setSection,
				setNewTodoTextArea,
				newTodoTextArea,
				showTextArea,
				setShowTextArea,
				handleTextAreaChange,
				handleNewTodoText,
				detailedFlag,
				handleDetailedTodoForm,
				detailedTodos,
				todos,
				allPendingTodos,
				allCompletedTodos,
				allRemovedTodos,
				todayTask,
				setTodayTask,
				setFechaIndicada,
				handleTodoActions,
				selectDayPanel,
				setSelectDayPanel,
				selectedDay,
				setSelectedDay,
				showPanelDay,
				setShowPanelDay,
				dayPanelSelected,
				setDayPanelSelected,
				searchValue,
				setSearchValue,
				searchToday,
				setSearchToday,
				showAdvice,
				setShowAdvice,
			}}>
			{children}
		</generalContext.Provider>
	);
}
export { GeneralContext, generalContext };
