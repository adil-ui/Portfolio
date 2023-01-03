import './Skills.css'
import { Waypoint } from 'react-waypoint'
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firestore } from '../../config/firebase';
/*
let items = [
    {
        image : 'assets/images/html.png',
        alt : 'html',
        title : 'HTML'
    },
    {
        image : 'assets/images/css-3.png',
        alt : 'css',
        title : 'CSS'
    },
    {
        image : 'assets/images/sass.png',
        alt : 'sass',
        title : 'SASS'
    },
    {
        image : 'assets/images/boot.jfif',
        alt : 'bootstrap',
        title : 'Bootstrap '
    },
    {
        image : 'assets/images/js.png',
        alt : 'js',
        title : 'JavaScript'
    },
    {
        image : 'assets/images/jquery.png',
        alt : 'jquery',
        title : 'jQuery'
    },
    {
        image : 'assets/images/react.png',
        alt : 'react',
        title : 'React'
    },
    {
        image : 'assets/images/php.png',
        alt : 'php',
        title : 'PHP'
    },
    {
        image : 'assets/images/laravel.png',
        alt : 'laravel',
        title : 'Laravel'
    },
    {
        image : 'assets/images/mysql.png',
        alt : 'mysql',
        title : 'mySql'
    },
    {
        image : 'assets/images/sqlserver.jfif',
        alt : 'SqlServer',
        title : 'SqlServer'
    },
    {
        image : 'assets/images/uml.png',
        alt : 'UML',
        title : 'UML'
    },

]
*/
const Skills = ({handleEnter}) =>{
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        onSnapshot(query(collection(firestore, 'Skills'), orderBy('number')), querySnapshot => {
          const firebaseSkills = []
          querySnapshot.forEach(skill => {
            firebaseSkills.push(skill.data());
          })
          setSkills(firebaseSkills);
        })
      }, []);
    return(
        <section className='skills' id="competences">
            <Waypoint onEnter={() => handleEnter(4)}/>
            <h2 className='section_title'>COMPETENCES</h2>
            <div className='white_line'></div>
            <div className='skills_container mt-5 pt-4 '>
                <div className='row g-4 mx-auto'>
                    { skills.map(item =>{
                        return(
                            <div className='mySkills col-xl-2 col-lg-3 col-md-4 col-sm-6 col-8 mx-auto' data-aos="flip-left" data-aos-duration="1000">
                                <div className='myskills_container mx-auto'  >
                                    <div>
                                        <img src={ item.image } alt= "skill_img" />
                                        <h4>{ item.title }</h4>
                                    </div>
                                </div>
                            </div>
                        
                        )
                    })}  
                </div>        
            </div>
         </section>
    )
  
}

export default Skills