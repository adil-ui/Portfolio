import { useTypewriter, Cursor  } from 'react-simple-typewriter'


import './Hero.css'
const Hero = () =>{
  
    const [text] = useTypewriter({
        words: ['Adil Boussalem'],
        loop: 0,
        typeSpeed : 120,
        deleteSpeed: 120,
        delaySpeed : 3000,
      })
    return (
      <section className="hero_section" >
        <div className="myName">
          <div className="App">
            <h1 className='text-light fw-bold'  >Je suis {text}
            <Cursor cursorColor='white'  />
            </h1>
          </div>
        </div>
        <div className="orange_line"></div>
        <div className="title">
          <p className="text-light fw-semibold">Développeur Web Full Stack</p>
          <p className="text-light fw-semibold">REACT / LARAVEL</p>
        </div>
      </section>
    );
}

export default Hero;