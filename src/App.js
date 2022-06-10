import "./App.css";
import TodoList from "./components/TodoList";

function App() {
	return (
		<main className="w-screen h-screen md:p-12 p-2 mx-auto text-gray-100 bg-gradient-to-tr from-blue-700 to-purple-400 ">
			<div className="todo-app mx-auto flex-initial flex-col items-center min-w-fit">
				<h1 className="text-4xl text-center tracking-wider mb-4 font-extrabold drop-shadow-xl">
					Todo app
				</h1>
				<TodoList />
			</div>
		</main>
	);
}

export default App;
