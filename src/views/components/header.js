// Header component
export const Header = () => (
    <nav className="navbar p-3 px-5 navbar-expand-lg   navbar-light bg-light">
        <a className="navbar-brand" href="#">Estate Villa</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link btn btn-warning" href="/">Home</a>
                </li>

            </ul>
        </div>
    </nav>
)
