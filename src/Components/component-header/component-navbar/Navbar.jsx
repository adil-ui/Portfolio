import './navbar.css'
const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-transparent py-3">
            <div className="container-fluid">
                <button className="navbar-toggler bg-light mb-4 position-absolute top-0 mt-3 end-0 me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item me-4">
                            <a className="nav-link text-light fw-bolder" aria-current="page" href="#services">ACCUEIL</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link text-light  fw-bolder " href="#about">A PROPOS</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link text-light fw-bolder " href="#formation">EDUCATION</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link text-light fw-bolder " href="#projet">PROJETS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fw-bolder " href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}
export default Navbar