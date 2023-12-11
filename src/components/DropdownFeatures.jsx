const DropdownFeatures = () => {
  return (
    <div className="absolute top-10 right-0 shadow-2xl bg-white px-6 py-4 rounded-lg w-max flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <img src="images/icon-todo.svg" width={18} alt="" />
        <span>Todo List</span>
      </div>
      <div className="flex gap-3 items-center">
        <img src="images/icon-calendar.svg" width={18} alt="" />
        <span>Calendar</span>
      </div>
      <div className="flex gap-3 items-center">
        <img src="images/icon-reminders.svg" width={18} alt="" />
        <span>Reminders</span>
      </div>
      <div className="flex gap-3 items-center">
        <img src="images/icon-planning.svg" width={18} alt="" />
        <span>Planning</span>
      </div>
    </div>
  );
};

export default DropdownFeatures;
