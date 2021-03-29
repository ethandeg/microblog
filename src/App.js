import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Routes from "./Routes"
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';


function App() {
 
  const [posts, setPosts] = useState([{id: uuidv4(), title:"this is a test title", description:"see how description is also a test", body: "hello, world!"}])
  const addPost = (newPost) => {
    newPost.id = uuidv4()
    setPosts(post => [...post, newPost])
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div className="App">
        <Header />
        <Routes addPost={addPost} removePost={removePost} posts={posts}/>
    </div>
  );
}

export default App;
