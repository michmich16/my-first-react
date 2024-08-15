import './styles/App.scss';
import { Greetings } from "./components/Greetings/Greetings";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Livrettet } from "./components/Livretter/Livretter";
import { Button } from "./components/Botton/Button";
import { Wrapper } from './components/Wrapper/Wrapper';
import { Card } from './components/Cards/Card';

//test git

function App() {

  const favDishes = ['pizza', 'lasagne', 'burger', 'fried worms', 'human head']
  const favFilms = ['Taxi driver', 'Trainspotting', 'This is england', 'Midnight my love', 'Gas station']

  return (
    <>
      <Header headerText="props is cool" />
      <Navbar />
      <h1>Hello World!!</h1>
      <Main />
      <Greetings textValue="Michael" />
      <Greetings textValue="Oscar" />
      <Greetings textValue="Fred" />
      <Livrettet dishLists={favDishes} />
      <Livrettet dishLists={favFilms} />
      <Button
        action={() => alert('Button 1 clicked!')}
        size="small"
        theme="light"
        text="Small Light Button"
      />
      <Button
        action={() => alert('Button 2 clicked!')}
        size="medium"
        theme="dark"
        text="Medium Dark Button"
      />
      <Button
        action={() => alert('Button 3 clicked!')}
        size="large"
        theme="light"
        text="Large Light Button"
      />

      {/* this Wrapper has a props.children, so it can contain another child element in it but it will need to use html closing tag */}

      <Wrapper title="Overskrift" subtitle="Underskrift" >
        <Card title="Card Title" textContent="Hej med dig den her er text content" footerContent="FOOTER" />
        <Card title="Card Title" textContent="Hej med dig jeg skriver lorem ip sum " footerContent="FOOTER" />
        <Card title="Card Title" textContent="Hej med dig jeg kender ikke fasar" footerContent="FOOTER" />
      </Wrapper>

      <Footer />
    </>

  )
}
export default App
