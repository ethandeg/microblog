import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Routes from "./Routes"
import { useEffect } from "react"
import { useDispatch, } from "react-redux"
import { consolePosts, loadPosts } from "./actions"


function App() {


	consolePosts()



	return (
		<div className="App">
			<Header />
			<Routes />
		</div>
	);
}

export default App;
