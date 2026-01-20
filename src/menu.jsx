
import './App.css';
import Menu1 from "./imgs/menu-1.png"
import Menu2 from "./imgs/menu-2.png"
import Menu3 from "./imgs/menu-3.png"
import Menu4 from "./imgs/menu-4.png"
import Menu5 from "./imgs/menu-5.png"
import Menu6 from "./imgs/menu-6.png"
import Menu7 from "./imgs/menu-7.png"
import Menu8 from "./imgs/menu-8.png"
function MenuItems(props){
    
    return(
        <>
        <div className='MenuItemsChildren'>
            <img src={props.img} alt="" />
            <h2>{props.header}</h2>
            <p>{props.title}</p>
            <h4>{props.price}</h4>
        </div>
        </>
    )
 }
 export default function Menu(props){
   
    return(
        
        <section id="menu">
            <br /> <br /> <br />
            <div className='menuCon'>
                <div className='headerOfTheMenu'>
        <span>set Menu</span>
        <h1>OUR POPULAR MENU</h1>
        </div>
        <div className='MenuItemsCon'>
    <div className='MenuItemsChild'>
        <MenuItems 
            img={Menu1} 
            header="Expresso"
            title='This expresso is very good and makes you relax.'
            price="19.99$"
        />
    </div>
    <div className='MenuItemsChild'>
        <MenuItems 
            img={Menu2} 
            header="Latte"
            title='Creamy and smooth latte for relaxing and medditation.'
            price="17.99$"
        />
    </div>
    <div className='MenuItemsChild'>
        <MenuItems 
            img={Menu3} 
            header="Coffee"
            title='Perfect coffee for relaxation and stay tuned for work'
            price="10.99$"
        />
    </div>
    <div className='MenuItemsChild'>
        <MenuItems 
            img={Menu4} 
            header="Coffee sand"
            title='This type of coffee is the best in our shop cause of his taste'
            price="25.49$"
        />
    </div>
    <div className='MenuItemsChild'>
        <MenuItems 
            img={Menu5} 
            header="Coffee fengan"
            title='It is the best coffe for old men cause it memory the old men the memories'
            price="20.00$"
        />
    </div>
    <div className='MenuItemsChild'>
        <MenuItems 
            img={Menu6} 
            header="Coffee ma2loba"
            title='Sory we will bring to you another coffee instead of this'
            price="0$"
        />
    </div>
    <div className='MenuItemsChild'>
        <MenuItems 
            img={Menu7} 
            header="The Big Boss"
            title='It is the best coffee ever you will taste becaus eit contains very important things idk about it'
            price="35.99$"
        />
    </div>
    <div className='MenuItemsChild'>
        <MenuItems 
            img={Menu8} 
            header="Simple coffee"
            title='Simple and cheap coffee for regular people made to help people not to sleep'
            price="20.99$"
        />
    </div>
</div>

        </div>
        </section>
    )
}
