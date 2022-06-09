import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	const updateTodo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setTodos((prev) =>
			prev.map((item) => (item.id === todoId ? newValue : item))
		);
	};

	console.log("stuff");
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
		<div className="text-center max-w-fit mx-auto text-gray-100 drop-shadow-lg bg-slate-900 bg- rounded-xl px-6 py-8">
			<h1 className="pb-2">What's the Plan for Today</h1>
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
