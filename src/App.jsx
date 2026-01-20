import './App.css';
import Header from "./header"
import Home from "./home"
import About from './about';
import Menu from './menu'
import Test from './Testimonalis';

import ContactMainContent from './contact';
import MainContentFooter from './footer';
function App(){
  return (
    <>
    <title>Caffeine cove</title>
    <Header/>
    <Home />
    
   <About />
   
   <Menu />
   <Test />
   <br />
   <ContactMainContent />
   <MainContentFooter />
</>
  );
}

export default App;
