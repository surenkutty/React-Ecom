
import Logo from './assets/ctlogo.png'

function Navbar() {
    return(
        <nav className="navbar">
            <nav className="nav-div">
                <div className="logo"><a href="#">
                    <img  className='logo-img' src={Logo} alt="ct"></img></a></div>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">content</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            </nav>
        </nav>
    );
    
}

export default Navbar