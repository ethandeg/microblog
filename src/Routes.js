import {Route, Switch} from "react-router-dom"
import NewPost from "./NewPost"
import Post from "./Post"
import HomePage from "./HomePage"
const Routes = ({addPost, posts, removePost}) => {
    return (
        <Switch>
            <Route exact path ="/"> <HomePage posts={posts}/></Route>
            <Route exact path = '/new' > <NewPost addPost={addPost}/></Route>
            <Route exact path = "/:postId"> <Post posts={posts} removePost={removePost}/></Route>
        </Switch>
    )
}

export default Routes