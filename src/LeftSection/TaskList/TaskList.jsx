function TaskList({ children }) {
  return (
    <ul className="flex flex-col w-72 border-2 border-black h-96 overflow-y-scroll overflow-x-hidden p-8 pr-0 pl-0 mt-0 mb-0 scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent">
      {children}
    </ul>
  );
}

export { TaskList };
