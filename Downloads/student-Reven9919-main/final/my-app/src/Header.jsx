import './Header.css';
import ThemeSwitcher from'./ThemeSwitcher';

function Header({onNav, theme, toggleTheme}){
    return(
        <header className='header'>
            <nav className='header-nav'>
                <ul className='header-nav__list'>
                    <li className='header-nav__item'>
                        <a className='header-nav__link' onClick={onNav} data-page='Articles' href='#home'>Home</a>
                    </li>
                    <li className='header-nav__item'>
                        <a className='header-nav__link' onClick={onNav} data-page='Resources' href='#resources'>Resources</a>
                    </li>
                    <li className='header-nav__item'>
                        <a className='header-nav__link' onClick={onNav} data-page='About' href='#about'>About</a>
                    </li>

                </ul>
            </nav>
            <h1 className='header__title'>Films Introduction</h1>
            <ThemeSwitcher className='header__theme-switcher' theme={theme} toggleTheme={toggleTheme}/>
            <img className='header__pic' src='https://images.unsplash.com/photo-1670652457973-73e0b9130d59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='logopic'></img>

            <span className='header__subtitle'>My blog of film articles</span>
        </header>
    )
}

export default Header;