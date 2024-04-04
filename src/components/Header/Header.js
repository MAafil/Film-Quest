import './Header.css';
import logo from '../Logo/filmquest.jpeg';
import MainMenu from '../MainMenu/MainMenu';

function Header() {
    return (
        <>
        <header className="headHeader">
            <div>
                <a>
                    <img src={logo} alt="fox reel" />
                </a>
            </div>
            <div>Film Quest</div>
        </header>
        <MainMenu />
        </>
    );
}

export default Header;