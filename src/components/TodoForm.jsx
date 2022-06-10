import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput("");
	};

	return (
		<form
			className={` todo-form min-w-32 mt-4 mb-6 md:mx-12 gap-2 flex flex-wrap justify-between bg-gradient-to-r rounded ${
				props.edit
					? "from-blue-900 via-blue-900 to-blue-600 p-1"
					: "from-purple-900 via-purple-900 to-fuchsia-600 p-1"
			} `}
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				rows={props.edit ? "4" : "1"}
				placeholder={props.edit ? "edit" : "Add a todo"}
				name="text"
				className={`todo-input w-12 flex-1 shadow-inner p-2 bg-slate-900 ${
					props.edit ? "min-w-fit overflow-clip" : ""
				} `}
				value={input}
				onChange={handleChange}
				ref={inputRef}
			/>
			<button className="todo-button rounded-full px-2 py-1  text-gray-50">
				{props.edit ? "Update" : "Add todo"}
			</button>
		</form>
	);
}

export default TodoForm;
