import './App.css';
import home from './imgs/coffee-home.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Home(){
    return(
        <section id="Home">
            <br /><br />
            <div className='homeCon'>
                <div className="homeContent">
                    <div className="homeText">
                    <h3>Black coffe is awesome.</h3>
                    <h1 className='homeTextH1'> <span>Time Discover</span> <br /> Coffe House</h1>
                    <p>We care about you that we can use a very excellent coffe
                        for our customer,our caffeine <br /> is very populer
                        and special,I promise the coffe will tastes good
                    </p>
                    <button>Explore more<FontAwesomeIcon icon={faCartShopping}/></button>
                    </div>
                    <div className='homeImgCon'>
                  <img src={home} alt="" className='homeImg'/>
                    </div>
                    
                </div>
            </div>
            </section>
      
    )
}