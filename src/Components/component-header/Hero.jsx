import { useTypewriter, Cursor  } from 'react-simple-typewriter'


import './Hero.css'
const Hero = () =>{
  
    const [text] = useTypewriter({
        words: ['Web Full Stack', 'React - Laravel'],
        loop: 0,
        typeSpeed : 130,
        deleteSpeed: 130,
        delaySpeed : 2500,
      })
    return (
      <section className="hero_section" >
        <div className="myName">
          <div className="App">
            <h1 className='text-light fw-bold'  >Je suis Adil Boussalem</h1>
          </div>
        </div>
        <div className="orange_line"></div>
        <div className="title">
          <p className="text-light fw-semibold">Développeur {text} <Cursor cursorColor='white'  /></p>
        </div>
      </section>
    );
}

export default Hero;