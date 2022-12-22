import './Education.css'

const Education = () =>{
    return (
      <section className="education" id="formation">
        <h2 className="section_title">EDUCATION</h2>
        <div className="white_line"></div>
        <div className="education_container">
          <div className="w-100">
            <div className="education_degree">
              <p className="fs-4 fw-semibold mb-4">Master en management de projets informatiques</p>
              <p className="fs-5 fw-bolder text-white text-opacity-75">Miage-rabat</p>
            </div>
          </div>
          <div className="w-100 pos_right mt-5 pt-4">
            <div className="education_degree mt-5">
              <p className="fs-4 fw-semibold mb-4">Bachelor en Base de données et développement</p>
              <p className="fs-5 fw-bolder text-white text-opacity-75">Miage-rabat</p>
            </div>
          </div>
          <div className="w-100 mt-5 pt-4">
            <div className="education_degree mt-5">
              <p className="fs-4 fw-semibold mb-4">Technicien Spécialisé en Développement Informatique</p>
              <p className="fs-5 fw-bolder text-white text-opacity-75">Miage-rabat</p>
            </div>
          </div>
          <div className="w-100 pos_right mt-5 pt-4">
            <div className="education_degree mt-5 ">
              <p className="fs-4 fw-semibold mb-4">Baccalauréat en sciences de la vie et de la terre</p>
              <p className="fs-5 fw-bolder text-white text-opacity-75">Génération Scientifique - Rabat </p>
            </div>
          </div>
          <div className="education_year">
            <div className="year_container">
              <div className="year">
                <p className="fw-bold">2021 2023</p>
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