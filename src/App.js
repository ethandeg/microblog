import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Routes from "./Routes"
import {useEffect} from "react"
import {getPostsFromAPI} from "./actionCreators"
import {useDispatch} from "react-redux"


function App() {
  // function PostList({posts}) {
  //   const dispatch = useDispatch();
  
  //   useEffect(() => {
  //     dispatch(getPostsFromAPI())
  //   }, [dispatch]);

  // }

  // PostList()



  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
