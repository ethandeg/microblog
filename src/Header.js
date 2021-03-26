import {Link} from '@material-ui/core';
import "./Header.css"

const Header = () => {
    return (
        <header className ="header">
            <h1>Microblog!</h1>
            <Link 
            component='button'
            variant='body2'>Blog</Link>
        </header>
    )
}

export default Header