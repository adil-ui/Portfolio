
import './About.css'
import { Waypoint } from 'react-waypoint';


const About = ({ handleEnter }) => {

    return (
        <section id="Apropos">
            <Waypoint
                onEnter={() => handleEnter(2)}
            />
            <div className='about_container col-xl-7 col-lg-7 col-md-8 col-sm-10 col-11 '>
                <h2 className='section_title '>A PROPOS</h2>
                <div className="white_line mb-5"></div>
                <div className='d-flex justify-content-xl-between justify-content-lg-center justify-content-center align-items-start row gx-5'>
                    <div className='img_container col-xl-3 col-lg-4 col-md-6 col-8 rounded-3 ' data-aos="fade-right" data-aos-duration="1000">
                        <img src="assets/images/profile.jpg" className='w-100 rounded-3' alt="profil" />
                    </div>
                    <div className='about_text col-xl-9 col-lg-9 col-md-10  col-11 text-xl-start text-lg-center text-center' data-aos="fade-left" data-aos-duration="1000">
                        <p className='text-light about_me mb-4'>
                            Je m'appel Adil Boussalem, mon objectif est de devenir chef de projet d'ici 2ans - 3ans,  mon domaine de compétence
                            est le développement web, je justifie cette compétence par mon parcours pédagogique ci-dessous(section education). <br /><br />

                            Et pour Affiner mes skills, j'ai intégré le bootcamp de Développement Web Full Stack à la 3W ACCADEMY, où j'ai passé : <br />
                            +600 heures de pratique, <br />
                            +20 mini projet, <br />
                            5 projet réel: <br />
                            - Mon portfolio (Reactjs) <br />
                            - Blog (PHP) <br />
                            - E-commerce (Laravel) <br />
                            - E-commerce (ReactJs - Laravel) <br />
                            - Site annonces immobilier (reactjs - laravel) <br /><br />

                            Aujourd'hui, ma prochaine étape dans mon plan professionnel c'est la recherche d'un "STAGE" ou "EMPLOI".
                        </p>
                        <p><i class="bi bi-envelope-fill"></i> adilboussaleem@gmail.com</p>
                        <p><a href="https://github.com/adil-ui" target='_blank' rel="noreferrer"><i class="bi bi-github"></i> Github</a></p>
                        <p><a href="https://www.linkedin.com/in/adil-boussalem-33641b202/" target='_blank' rel="noreferrer"><i class="bi bi-linkedin"></i> Linkedin</a></p>
                        <p><i class="bi bi-telephone-fill"></i> 06 10 47 38 90</p>
                        <div className='btn_cv mt-5'>
                            <a href="/assets/cv/CV.pdf" className='text-light fw-semibold rounded-1' target='_blank' rel="noreferrer">Télécharger CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About