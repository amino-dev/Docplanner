import {Card, Button} from "react-bootstrap"

/*
import Img from "./img"
import warsaw from '../img/warsaw.png'
import barcelona from '../img/barcelona.png'
import istanbul from '../img/istanbul.png'
import rome from '../img/rome.png'
import bologna from '../img/bologna.png'
import curitiba from '../img/curitiba.png'
import mexico from '../img/mexico-city.png'
*/

const cities = [
   {name : "Warsaw", img : "https://www.docplanner.com/images/warsaw.png"},
   {name : "Barcelona", img : "https://www.docplanner.com/images/barcelona.png"},
   {name : "Istanbul", img : "https://www.docplanner.com/images/istanbul.png"},
   {name : "Rome", img : "https://www.docplanner.com/images/rome.png"},
   {name : "Bologna", img : "https://www.docplanner.com/images/bologna.png"},
   {name : "Curitiba", img : "https://www.docplanner.com/images/curitiba.png"},
   {name : "Mexico City", img : "https://www.docplanner.com/images/mexico-city.png"}
]

function City(props){
   return(
      <Card  className="bottom-card mr-4 mb-3">
         <Card.Img variant="top" src={props.img} />
         <Card.Body className="row mx-1">
             <Card.Title className="mr-auto my-auto country">{props.name}</Card.Title>
             <Button className="ml-auto btn-country my-auto" variant="primary">see openings</Button>
          </Card.Body>
      </Card> 
   )
}

function Cities() {
   return(
    <div className="container">
      <div className="cities px-5 mx-3 my-5 pb-5">
         {cities.map(element =>
           <div>
              <City name = {element.name} img = {element.img}/>     
           </div>
         )}
      </div>
    </div>
   )
}
export default Cities

/*
function Cardsbottom(){
    return(
        <div className="container mt-5 pt-4">
            <div className="row px-5 mx-3 mb-4">
              <div className="col-md-4 col-12">
                <Card  className="bottom-card">
                   <Card.Img variant="top" src={warsaw} />
                   <Card.Body className="row mx-1">
                      <Card.Title className="mr-auto my-auto country">Warsaw</Card.Title>
                      <Button className="ml-auto btn-country" variant="primary">see openings</Button>
                   </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card  className="bottom-card">
                   <Card.Img variant="top" src={barcelona} />
                   <Card.Body className="row mx-1">
                      <Card.Title className="mr-auto my-auto country">Barcelona</Card.Title>
                      <Button className="ml-auto btn-country" variant="primary">see openings</Button>
                   </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card  className="bottom-card">
                   <Card.Img variant="top" src={istanbul} />
                   <Card.Body className="row mx-1">
                      <Card.Title className="mr-auto my-auto country">Istanbul</Card.Title>
                      <Button className="ml-auto btn-country" variant="primary">see openings</Button>
                   </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row px-5 mx-3 mb-4">
              <div className="col-md-4 col-12">
                <Card  className="bottom-card">
                   <Card.Img variant="top" src={rome} />
                   <Card.Body className="row mx-1">
                      <Card.Title className="mr-auto my-auto country">Rome</Card.Title>
                      <Button className="ml-auto btn-country" variant="primary">see openings</Button>
                   </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card  className="bottom-card">
                   <Card.Img variant="top" src={bologna} />
                   <Card.Body className="row mx-1">
                      <Card.Title className="mr-auto my-auto country">Bologna</Card.Title>
                      <Button className="ml-auto btn-country" variant="primary">see openings</Button>
                   </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card  className="bottom-card">
                   <Card.Img variant="top" src={curitiba} />
                   <Card.Body className="row mx-1">
                      <Card.Title className="mr-auto my-auto country">Curitiba</Card.Title>
                      <Button className="ml-auto btn-country" variant="primary">see openings</Button>
                   </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row px-5 mx-3 mb-5">
              <div className="col-md-4 col-12 mb-5">
                <Card  className="bottom-card">
                   <Card.Img variant="top" src={mexico} />
                   <Card.Body className="row mx-1">
                      <Card.Title className="mr-auto my-auto country">Mexico City</Card.Title>
                      <Button className="ml-auto btn-country" variant="primary">see openings</Button>
                   </Card.Body>
                </Card>
              </div>
            </div>
        </div>
    ) 
}
  export default Cardsbottom 
  */