import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {

    return (
        <header className ="header">
`            <div className="container mt-5 text-center">
                <h1 className="display-1 text-primary">Microblog!</h1>

                <Link className="btn btn-lg btn-outline-primary" to="/">Blog</Link>  <Link className="btn btn-lg btn-outline-success" to="/new">Add a New Post</Link>`

            </div>
        </header>
    )
}

export default Header