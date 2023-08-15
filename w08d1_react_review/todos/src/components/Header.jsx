const Header = (props) => {
    return (
        <div>
            <h1>Awesome Todos WebApp!!</h1>
            <p>{props.numComplete}/{props.numTotal} Complete</p>
        </div>
    );
};

export default Header;

Header.defaultProps = {
    numComplete: 4,
    numTotal: 7
};
