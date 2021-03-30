import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Routes from "./Routes"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import PostContext from "./contexts/postContext"


function App() {

  // const [posts, setPosts] = useState([{ id: "test", title: "this is a test title", description: "see how description is also a test", body: "hello, world!" }])




  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
