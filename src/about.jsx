import './App.css';
import home from './imgs/coffee-home.png'

export default function About(){
    return(
    <section id="about">
        <div className='AboutCon'>
         <div className="imgAboutCon">
            <img src={home} alt="" className='aboutImg'/>
            </div>
            <div className="textAboutCon">
                <h1 className='textAboutH1'><span>Caffeine cove</span> about info</h1>
                <p>Caffeine cove is a very good and deleicious coffe we buy in our 
                    shop that we can make it with a special and different make
                </p>
                <br />
                <h3>A cozy Escape</h3>
               <p>Our cafe is made for relaxition,working and make yoga with our
                coach ,yes there is a yoga room to keep you relax with a fantastic coach
               </p>
               <br />
               <h3>Quality and suistainability</h3>
               <p>We offer to you in your coffe with a brazilian caffeine for relaxition and a premium
                brazillian coffe, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque.
               </p>
            </div>
        </div>
    </section>
    );
}