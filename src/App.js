
import './App.css';
import  NavBar  from "./components/navBar"
import  Img from "./components/img"
import  Title from "./components/title"
import Paragraphs from './components/parpagraph'
import Cards from './components/cart-top'
import Brand from './components/brand'
import Description from './components/description'
import Paragraphbottom from './components/paragraph-bottom'
import Cities from './components/cards-bottom'
import Footer from './components/footer'


function App() {
  return (
    <div>
      <NavBar />
      <Img />
      <Title />
      <Paragraphs />
      <Cards />
      <Brand />
      <Description />
      <Paragraphbottom />
      <Cities />
      <Footer />
    </div>
 
  );
}
export default App;
