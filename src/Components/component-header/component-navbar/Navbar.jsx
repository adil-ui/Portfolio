import './navbar.css'

let navItem = [
    {
        content : 'ACCUEIL',
        href : '#top'
    },
    {
        content : 'A PROPOS',
        href : '#about'
    },
    {
        content : 'EDUCATION',
        href : '#formation'
    },
    {
        content : 'COMPETENCES',
        href : '#competences'
    },
    {
        content : 'PROJETS',
        href : '#projets'
    },
    {
        content : 'CONTACT',
        href : '#contact'
    },
 ]
const Navbar = () =>{
    return(
        <nav className="navbar fixed-top navbar-expand-lg bg-transparent" >
            <div className="container-fluid" >
                <button className="navbar-toggler bg-light mb-4 position-absolute top-0 mt-3 end-0 me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        {
                            navItem.map(item =>{
                                return(
                                    <li className="nav-item me-4">
                                        <a className="nav-link fw-bolder text-light"  href={item.href}>{item.content}</a>
                                    </li>
                                )
                            })
                        }
                       
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}
export default Navbar