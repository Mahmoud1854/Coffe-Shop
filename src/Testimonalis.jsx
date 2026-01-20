import './App.css';
import person1 from './imgs/person1.jpg'
import person2 from './imgs/person2.jpg'
import person3 from './imgs/person3.jpg'
export default function Test(){
 return(
    <section id='Test'>
        <br /><br />
        <h1 className='TestH1'>WHAT OUR CUSTOMERS SAYS</h1>
        <br /><br />
        <div className='TestimCon'>
            <div className='TestimChild'>
            <img src={person1} alt="" />
            <h2>Mohamed Ramadan </h2>
            <p>"This shop is very amazing that their surface is very good an the men who works in the shop is very polite
               and the coffe is very good and makes me relax"</p>
            </div>
            <div className='TestimChild'>
            <img src={person2} alt="" />
            <h2>Mahmoud Mohamed</h2>
            <p>"This shop is very amazing that their surface is very good an the men who works in the shop is very polite
               and the coffe is very good and makes me relax"</p>
            </div>
            <div className='TestimChild'>
            <img src={person3} alt="" />
            <h2>Mahmoud Nasr</h2>
            <p>"This shop is very amazing that their surface is very good an the men who works in the shop is very polite
               and the coffe is very good and makes me relax"</p>
            </div>
        </div>

        <br />
    </section>
 )
}