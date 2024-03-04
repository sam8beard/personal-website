import './Home.css'
import Nav from './../components/Nav'
const Home = () => { 
    return (
        
        <div className='parent-container'>
            <div className='parent-item parent-item-1'> 
                <h1> Hi. I'm Sammy.</h1>
                <p> Hello there! My name is Sammy Beard. I am computer science student
                    at the University of Georgia. Outside of my studies, I enjoy fitness, ... blah blah 
                    yadda yadda some other shit
                </p>
                {/* <h1> Sammy Beard </h1> */}
                {/* <p> 
                    Hey! My name is Sammy. I am a Computer Science 
                    student at the University of Georgia.
                </p> */}
            </div>
            <div className='parent-item parent-item-2'> 
                <img className= 'sammy-pic' src='/images/sammy.jpg' alt='A picture of Sammy'/>
            </div>


         
        </div>

        
    )
}
export default Home 