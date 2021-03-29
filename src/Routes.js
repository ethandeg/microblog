import {Route, Switch} from "react-router-dom"
import NewPost from "./NewPost"
import Post from "./Post"
import HomePage from "./HomePage"
const Routes = ({addPost, posts, removePost}) => {
    return (
        <Switch>
            <Route exact path ="/"> <HomePage /></Route>
            <Route exact path = '/new' > <NewPost /></Route>
            <Route exact path = "/:postId"> <Post /></Route>
        </Switch>
    )
}

export default Routes