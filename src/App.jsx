import './App.css';
import { Greetings } from "./components/Greetings";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <h1>Hello World</h1>
    <Main/>
    <Greetings/>
    <Footer/>
    </>
    
  )
}
export default App
