
import './About.css'
import { Waypoint } from 'react-waypoint';


const About = ({ handleEnter }) =>{
   
    return(
        <section id='about'>
            <Waypoint
                onEnter={() => handleEnter(2)}
            />
            <div className='about_container col-xl-7 col-lg-7 col-md-8 col-sm-10 col-12 '>
                <h2 className='section_title '>A PROPOS</h2>
                <div className="white_line mb-5"></div>
                <div className='d-flex justify-content-xl-between justify-content-lg-center justify-content-center align-items-start row g-0'> 
                    <div className='img_container col-xl-3 col-lg-4 col-md-6 col-sm-8 col-8'>
                        <img src="assets/images/profil.png"  alt="profil" />
                    </div>
                    <div className='about_text col-xl-8 col-lg-9 col-md-10 col-sm-11 col-11 text-xl-start text-lg-center text-center'>
                        <p className='text-light'>Je suis Adil Boussalem, Bachelor en Base de données et développement, 
                            diplômé de l’école MIAGE, passionné par le Developpement web. J'ai créé ce site pour 
                            que vous puissiez me connaître personnellement à travers mes projets. 
                            Aujourd’hui je suis à la recherche de nouvelles opportunités.
                        </p>
                        <p><i class="bi bi-envelope-fill"></i> adilboussaleem@gmail.com</p>
                        <p><a href="https://github.com/adil-ui"><i class="bi bi-github"></i> Github</a></p>
                        <p><a href="https://www.linkedin.com/in/adil-boussalem-33641b202/"><i class="bi bi-linkedin"></i> Linkedin</a></p>
                        <p><i class="bi bi-telephone-fill"></i> 06 10 47 38 90</p>
                        <div className='btn_cv mt-5'>
                            <a href="assets/cv/CV.pdf" className='text-light fw-semibold rounded-1' target='_blank'  rel="noopener">Télécharger CV</a>
                        </div>
                    </div>
                </div>              
            </div>
        </section>
    )
}

export default About