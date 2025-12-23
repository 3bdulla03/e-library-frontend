import { Link } from "react-router-dom"

const Nav = () => {

    return(
        <>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Favorites">Favorites</Link>
            </nav>
        </header></>
    )
}

export default Nav