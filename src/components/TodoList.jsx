import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
	const [todos, setTodos] = useState(() => {
		// Get todos from storage
		return JSON.parse(localStorage.getItem("todos")) || [];
	});

	// Save list to local storage
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = (todo) => {
		// skip empty lines and strip repeated white spaces
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	const updateTodo = (todoId, newValue) => {
		// skip empty lines and strip repeated white spaces
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setTodos((prev) =>
			prev.map((item) => (item.id === todoId ? newValue : item))
		);
	};

	const removeTodo = (id) => {
		const removeArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removeArr);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div className="px-6 py-8 mx-auto text-gray-100 min-w-fit md:max-w-md drop-shadow-lg bg-slate-900 rounded-xl">
			<h2 className="pb-2 text-center">What's the Plan for Today</h2>
			<TodoForm onSubmit={addTodo} />
			<Todo
				todos={todos}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			/>
		</div>
	);
}

export default TodoList;
