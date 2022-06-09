import "./App.css";
import TodoList from "./components/TodoList";

function App() {
	return (
		<main className="w-screen h-screen md:p-12 p-2 mx-auto text-gray-100 bg-gradient-to-tr from-blue-700 to-purple-400 ">
			<div className="todo-app">
				<h1 className="text-2xl mb-4 font-extrabold mx-auto w-fit">Todo app</h1>
				<TodoList />
			</div>
		</main>
	);
}

export default App;
