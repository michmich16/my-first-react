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



function App() {

  const favDishes = ['pizza', 'lasagne', 'burger', 'fried worms', 'human head']
  const favFilms = ['Taxi driver', 'Trainspotting', 'This is england', 'Midnight my love', 'Gas station']
  const cardInfo = [
    {
      title: "Card Title 1",
      textContent: "Hej med dig jeg kender ikke fasar",
      img: 'fasar.jpg',
      footerContent: "Just a FOOTER 1"
    },
    {
      title: "Card Title 2",
      textContent: "Hej med dig jeg kender ikke fasar",
      img: 'laughingman1.jpg',
      footerContent: "Just a FOOTER 2"
    },
    {
      title: "Card Title 3",
      textContent: "Hej med dig jeg kender ikke fasar",
      img: 'laughingman2.jpg',
      footerContent: "Just a FOOTER 3"
    },
  ]

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

      <Wrapper title="Card Overskrift" subtitle="Card Underskrift" >
        <div className='cardGrid'>
          <Card title="Card Title 0" textContent="Hej med dig jeg elsker lidl<3 meget" img='laughingman3.jpg' footerContent="Just a FOOTER lol" />
          <Card title="Card Title 0.1" textContent="Hej med dig jeg skriver lorem ipsum " img='laughingman4.jpg' footerContent="Just a FOOTER lmao" />
          <Card title="Card Title 0.2" textContent="Hej med dig jeg kan ikke lide netto" img='laughingman5.jpg' footerContent="Just a FOOTER lmfao" />
          {cardInfo.map((card) => {
            return (<Card title={card.title} textContent={card.textContent} img={card.img} footerContent={card.footerContent} />)
          })}
        </div>
      </Wrapper>
      <Footer />
    </>

  )
}
export default App
