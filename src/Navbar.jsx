import { ImHome, ImList } from "react-icons/im"
import './App.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <button className="home">
                    <ImHome />
                </button>
                <div className="logo">
                    Logo
                </div>
                <button className="menu">
                    <ImList />
                </button>
            </nav>
        </>
    )
}

export default Navbar