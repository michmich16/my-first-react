import './styles/App.scss';
import { Greetings } from "./components/Greetings/Greetings";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Livrettet } from "./components/Livretter/Livretter";

function App() {

  const favDishes = ['pizza', 'lasagne', 'burger', 'fried worms', 'human head']
  return (
    <>
    <Header headerText="props is cool"/>
    <Navbar/>
    <h1>Hello World!!</h1>
    <Main/>
    <Greetings textValue="Michael"/>
    <Greetings textValue="Oscar"/>
    <Greetings textValue="Fred"/>
    <Livrettet dishLists = {favDishes}/>
    <Footer/>
    </>
    
  )
}
export default App
