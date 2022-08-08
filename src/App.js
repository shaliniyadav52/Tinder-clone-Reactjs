import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import TinderCards from './component/TinderCards';

function App() {
  return (
    //jsx is a javascript syntax extension that allows you to write html.
   <>
   {/* header */}
   <Header />
   
   <TinderCards/>


   <Footer/>

   </>

  


  );
}

export default App;
