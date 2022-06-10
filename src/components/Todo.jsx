import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitUpdate = (value) => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />;
	}

	return todos.map((todo, index) => (
		<div
			id={todo.id}
			key={index}
			className={`todo-row gap-2 rounded flex p-1 px-3 mt-2 drop-shadow
				${
					todo.isComplete
						? "bg-gradient-to-r from-green-600 to-green-700 line-through decoration-1 complete "
						: "bg-gradient-to-r from-blue-600 odd:to-blue-700 even:to-blue-400"
				}`}
		>
			<span
				key={todo.id}
				className="w-full text-left overflow-clip"
				onClick={() => completeTodo(todo.id)}
			>
				{todo.text}
			</span>
			<div className="icons flex gap-2 ml-auto items-center text-xl">
				<RiCloseCircleLine
					onClick={() => removeTodo(todo.id)}
					className="delete-icon rounded-full hover:bg-red-600 hover:text-gray-50 hover:drop-shadow-sm hover:-translate-y-[2px] transition"
				/>
				<TiEdit
					onClick={() => setEdit({ id: todo.id, value: todo.text })}
					className="edit-icon rounded hover:bg-fuchsia-500 hover:text-gray-50 hover:drop-shadow-sm hover:-translate-y-[2px] transition"
				/>
			</div>
		</div>
	));
}

export default Todo;
