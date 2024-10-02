function Footer() {
    return (
        <footer className="bg-light text-muted border-top shadow py-4 fixed-bottom">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-sm text-center text-sm-start">
                        <span>© 2024 <a href="https://github.com/Fazteel" className="text-reset fw-bold text-decoration-none">Fahmi</a>. All Rights Reserved.</span>
                    </div>
                    <div className="col-sm d-flex justify-content-center justify-content-sm-end mt-3 mt-sm-0">
                        <a href="https://github.com/Fazteel" className="text-muted ms-3">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="https://www.instagram.com/4ntaressss/" className="text-muted ms-3">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;