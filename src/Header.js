import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <header className ="header">
            <h1>Microblog!</h1>
            <Link to="/">Blog</Link>
            <Link to="/new">Add a New Post</Link>
        </header>
    )
}

export default Header