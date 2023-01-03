import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

import './Education.css'

const educations = [
  {
    title:"Master en management de projets informatiques",
    school: "Miage - Rabat - En cours",
    right: false
  },
  {
    title:"Bootcamp Développeur Web Full-Stack",
    school: "3W ACADEMY - Rabat",
    right: true
  },
  {
    title:"Bachelor en Base de données et développement",
    school: "Miage - Rabat",
    right: false
  },
  {
    title:"Technicien Spécialisé en Développement Informatique",
    school: "Miage - Rabat",
    right: true
  },
  {
    title:"Baccalauréat en sciences de la vie et de la terre",
    school: "Génération Scientifique - Rabat",
    right: false
  }

]

const Education = ({ handleEnter }) =>{
  useEffect(() => {
    AOS.init();
  }, [])
    return (
      <section className="education" id="education">
        <Waypoint onEnter={() => handleEnter(3)}/>
        <h2 className="section_title">EDUCATION</h2>
        <div className="white_line"></div>
        <div className="education_container ">
          {educations.map(education => (
                    <div data-aos="zoom-out" data-aos-duration="1000"  className={`${education.right ? "row d-md-flex d-sm-block d-block justify-content-end mt-5 pt-5" : "pt-4"}`}>
                      <div className="education_degree mt-4 col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
                        <p className="fw-semibold mb-4">{ education.title }</p>
                        <p className="fs-5  text-white text-opacity-75">{ education.school } </p>
                      </div>
                    </div>
          ))}

          <div className="education_year d-xl-block d-lg-none d-lg-none d-none">
            <div className="year_container">
              <div className="year">
                <p className="fw-bold">2021 2023</p>
              </div>
              <div className="line_verticale"></div>
            </div>
            <div className="year_container">
              <div className="year">
                <p className="fw-bold">2021 5mois</p>
              </div>
              <div className="line_verticale"></div>
            </div>
            <div className="year_container">
              <div className="year">
                <p className="fw-bold">2020 2021</p>
              </div>
              <div className="line_verticale"></div>
            </div>
            <div className="year_container">
              <div className="year">
                <p className="fw-bold">2018 2020</p>
              </div>
              <div className="line_verticale"></div>
            </div>
            <div className="year_container">
              <div className="year">
                <p className="fw-bold">Juin 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Education