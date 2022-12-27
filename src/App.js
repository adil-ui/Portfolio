import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import $ from "jquery";
import { Waypoint } from "react-waypoint";
import './App.css'
import Navbar  from "./Components/component-header/component-navbar/Navbar";
import Hero from './Components/component-header/Hero'
import About from "./Components/component-about/About";
import Education from "./Components/component-education/Education";
import Skills from "./Components/component-skills/Skills";
import Project from "./Components/component-project/Project";
import Contact from "./Components/component-contact/Contact";
import Footer from "./Components/component-footer/Footer";

const App = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const handleEnter = (index) => {
        $(".active").removeClass("active");
        $(`.nav-item:nth-of-type(${index})`).addClass("active")
    }

    

    return (
        <><Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#212529",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1.4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} />
            <header id="Accueil">
                <Navbar />
                <Hero />
                <div className='btn_down'><a href="#about"><i class="bi bi-arrow-down-circle-fill"></i></a></div>
                <Waypoint
                onEnter={() => handleEnter(1)}
            />
            </header>
            <main>
                <About handleEnter={handleEnter} />
                <Education handleEnter={handleEnter} />
                <Skills handleEnter={handleEnter}/>
                <Project handleEnter={handleEnter}/>
                <Contact handleEnter={handleEnter} />
            </main>
            <Footer />
            </>


    );
};

export default App;