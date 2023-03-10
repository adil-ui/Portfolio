import './Project.css'
import { Waypoint } from 'react-waypoint'
import { useState, useEffect } from 'react'
import { firestore } from "../../config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
/*
let projectItem = [
    {
        image: 'assets/images/swipy.png',
        title: 'Swipy',
        href : 'https://adil-ui.github.io/Swipy/',
        techno : ['HTML','CSS']
    },
    {
        image: 'assets/images/trello.png',
        title: 'Trello',
        href : 'https://adil-ui.github.io/Trello/',
        techno : ['HTML','CSS']
    },
    {
        image: 'assets/images/photofolio.png',
        title: 'Photofolio',
        href : 'https://adil-ui.github.io/PhotoFolio/',
        techno : ['HTML','CSS','Bootstrap']
    },
    {
        image: 'assets/images/ecommerce.png',
        title: 'E-commerce',
        href : 'https://adil-ui.github.io/E-commerce/',
        techno : ['HTML','CSS','Bootstrap']
    },
    {
        image: 'assets/images/calc.png',
        title: 'Calculatrice',
        href : 'https://adil-ui.github.io/Calculatrice/',
        techno : ['HTML','CSS','JavaScript']
    },
    {
        image: 'assets/images/timer.png',
        title: 'HIIT-Timer',
        href : 'https://adil-ui.github.io/HIIT-Timer/',
        techno : ['HTML','CSS','JavaScript']
    },
    {
        image: 'assets/images/devinette.png',
        title: 'Devinette',
        href : 'https://adil-ui.github.io/Devinette/',
        techno : ['HTML','CSS','JavaScript']
    },
    {
        image: 'assets/images/githubfinder.png',
        title: 'Github Finder',
        href : 'https://adil-ui.github.io/GithubAPI/',
        techno : ['HTML','CSS','JavaScript']
    },
    {
        image: 'assets/images/forkify.png',
        title: 'Forkify',
        href : 'https://adil-ui.github.io/Forkify/',
        techno : ['HTML','CSS','JavaScript']
    },
   
]*/
const Project = ({ handleEnter}) =>{
    const [projects, setProjects] = useState([]);
/*
    useEffect(() => {
        onSnapshot(collection(firestore, 'projects'), querySnapshot => {
            const firebaseProjects = []
            querySnapshot.forEach(project => {
                console.log(project);
                firebaseProjects.push(project.data());
            })   
            
            setProjects(firebaseProjects);
        })
    }, [])
 */
    useEffect(() => {
        onSnapshot(query(collection(firestore, 'projects'), orderBy('number')), querySnapshot => {
          const firebaseProjects = []
          querySnapshot.forEach(project => {
            firebaseProjects.push(project.data());
          })
          setProjects(firebaseProjects);
        })
      }, []);
    return(
        <section className="project" id="projets">
                            <Waypoint
                onEnter={() => handleEnter(5)}
            />
            <h2 className="section_title">MES PROJETS</h2>
            <div className="white_line"></div>

            <div className="project_container row g-0 mx-auto">
                {projects.map(item =>(
                     <div className="myproject col-xl-4 col-lg-6 col-md-8 col-sm-9 col-11 mx-auto" >
                        <div className='myproject_container' data-aos="zoom-in-up"data-aos-duration="500" data-aos-easing="ease-in-sine" >
                            <div className="project_img">
                                <a href={item.href}  target='_blank' rel="noopener noreferrer"><img src={item.image}  alt="project" /></a>
                            </div>
                            <div className='title_techno'>
                                <div className="project_title pb-2">
                                    <a href={item.href} className="text-light" target='_blank'  rel="noreferrer noopener"><h5 className='fw-semibold'>{ item.title}</h5></a>
                                </div>
                                <div className="project_techno pb-3 mx-auto">
                                    {item.techno.map(tech =>(
                                    <span className="text-light">{tech}</span>                               
                                    ))}
                                </div>
                            </div>
                        </div>                  
                    </div>
                ))}
    
            </div>
            
        </section>
    )
}

export default Project