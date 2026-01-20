
import './App.css';
function Location(){
    return(
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110537.11216380158!2d31.553383056640634!3d30.028687500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cfd610dcb93%3A0x788bf4731e776d8a!2sCosta%20Coffee!5e0!3m2!1sar!2seg!4v1768724623064!5m2!1sar!2seg"
   title="Contact location map"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    )
}
export default function ContactMainContent(){
    return(
        <section id='contact'>
            <p>What happens here</p>
            <h1>REASERVATION AREA</h1>
            <br /><br />
            <div className='contactCon'>
                <div className='locationChild'>
                    <Location />
                </div>
                <div className='FormChild'>
          <form action={formClick}>
            <h2>Book a table</h2>
            <br /><br />
            <input type="text" placeholder='Your name' required />
            <br /><br />
            <input type="email" placeholder='Your email' required />
            <br /><br />
            <input type="text" placeholder='Persons' required />
            <br /><br />
            <input type="date" required />
            <br /><br />
            <input type="time" required />
            <br /><br />
            <button>Book a table</button>
          </form>
                </div>
            </div>
            <br /><br /><br /><br /><br />
        </section>
        
    )
   
}
 const formClick = () =>{
        alert("The table has been booked,we wait for you")
    }