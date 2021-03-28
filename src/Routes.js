import {Route, Switch} from "react-router-dom"
import NewPost from "./NewPost"
const Routes = () => {
    return (
        <Switch>
            <Route exact path = '/new' > <NewPost /></Route>
        </Switch>
    )
}

export default Routes