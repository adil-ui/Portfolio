import './navbar.css'

let navItem = [
    {
        content : 'ACCUEIL',
        href : '#accueil'
    },
    {
        content : 'A PROPOS',
        href : '#Apropos'
    },
    {
        content : 'EDUCATION',
        href : '#education'
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 mx-auto" >
                        {
                            navItem.map(item =>{
                                return(
                                    <li className={`nav-item me-3 ${item.content === "ACCUEIL" ? 'active' : ""}`} >
                                        <a className="nav-link fw-bolder text-light"  href={item.href} >{item.content}</a>
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