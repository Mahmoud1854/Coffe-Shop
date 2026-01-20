import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faPinterest, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons'
function UpperFooter(){
    return(
    <div id='upperFooter'>
        <div className='footerChild1'>
            <h3>About info</h3>
            <p>This is the perfect place to relax and meditation,If you come 
                one time,You will addict to us
            </p>
            <br />
            <div className='footerText'>
            <p><span><FontAwesomeIcon
    icon={faLocationDot}
    style={{ color: "#ffffff" }}
  /></span>  Addres: Cairo Egypt
  </p>
  
  <p><span><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }}/></span>  Email:coffe@gmail.com</p>
  
  <p><span><FontAwesomeIcon icon={faPhone} /></span>  Phone:01094386404</p>
  </div>
        </div>
        <div className='footerChild2'>
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#Test">customersOpinions</a></li>
        <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div className='footerChild3'>
            <h3>Follow Us On</h3>
            <ul>
                <li><FontAwesomeIcon icon={faFacebookF} style={{ color: "#ffffff", marginTop:"3px"}}/>Facebook</li>
                <li><FontAwesomeIcon icon={faYoutube } style={{ color: "#ffffff",marginTop:"3px" }}/>   Youtube</li>
                <li><FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff",marginTop:"3px" }}/>  Twitter</li>
                <li><FontAwesomeIcon icon={faPinterest} style={{ color: "#ffffff",marginTop:"3px" }}/>  Pinterest</li>
                <li><FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff",marginTop:"3px" }}/>Instagram</li>
            </ul>
        </div>
    </div>
    )
}
function BottomFooter(){
 return(
    <div className='bottomFooter'>
      <p>©All rights are reserved | maded by  "Mahmoud Mohamed" </p>
    </div>
 )
}
export default function MainContentFooter(){
    return(
        <section id='footer'>
            <UpperFooter />

            <BottomFooter />
        </section>
   
    )
}