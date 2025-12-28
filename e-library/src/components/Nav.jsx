import { Link } from "react-router-dom"

const Nav = () => {

    return(
        <>
        <header>
            <nav>
                <Link to="/" className="nav-logo-container">
                    <img 
                        src="https://i.ibb.co/zHJqB9jP/AAA-library.png" 
                        alt="AAA Library Logo" 
                        className="nav-logo-img" 
                    />
                <span className="nav-logo-text">AAA Library</span>
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/Favorites">Favorites</Link>
                </div>
            </nav>
        </header></>
    )
}

export default Nav
