import './Skills.css'

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

]

const Skills = () =>{
    return(
        <section className='skills' id='competences'>
        <h2 className='section_title'>COMPETENCES</h2>
        <div className='white_line'></div>
        <div className='skills_container mt-5 pt-4'>
                { items.map(item =>{
                    return(
                        <div className='mySkills'>
                            <div>
                                <img src={ item.image } alt={ item.alt } />
                                <h4>{ item.title }</h4>
                            </div>
                        </div>
                    )
                })}          
        </div>
    </section>
    )
  
}

export default Skills