import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Routes from "./Routes"
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import PostContext from "./contexts/postContext"


function App() {
 
  const [posts, setPosts] = useState([{id: uuidv4(), title:"this is a test title", description:"see how description is also a test", body: "hello, world!"}])
  const addPost = (newPost) => {
    newPost.id = uuidv4()
    setPosts(post => [...post, newPost])
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const editPost = (updatedPost) => {
    const newPosts = posts.filter(post => post.id !== updatedPost.id)
    setPosts([...newPosts, updatedPost])
  }

  return (
    <div className="App">
        <Header />
        <PostContext.Provider value={{posts, addPost, removePost, editPost}}>
          <Routes />
        </PostContext.Provider>
    </div>
  );
}

export default App;
