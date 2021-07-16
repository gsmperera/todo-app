import ModIcon from './ModIcon';

function Header(props) {
    const darkMode = props.darkMode;
    const toggleMode = props.toggleMode;
    const modeColor = darkMode ? 'dark' : 'light';

    return (
        <div id='header' className={modeColor}>
            <h1>TODO</h1>
            <ModIcon darkMode={darkMode} toggleMode={toggleMode} />
        </div>
    );
}

export default Header;