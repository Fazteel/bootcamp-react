function Navbar() {
    return (
        <nav className="navbar p-4 navbar-expand-lg bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/">
                    <i className="bi bi-book-half"></i>
                    <span className="ms-2">MyContacts</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/contact">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;