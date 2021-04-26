/*
import iconPatients from '../img/icon-patients.svg'
import iconDoctors from '../img/icon-doctors.svg'
import iconClinics from '../img/icon-clinics.svg'
*/
import {Card} from "react-bootstrap"
import  Select  from "./select"
import  Clinic from "./clinik-select"
import Img from './img'



const cards = [
  {title : "For patients", img : "https://www.docplanner.com/icons/icon-patients.svg", description : "Find a doctor, book a visit and solve any health-related doubt", bg : "#00ccb1"},
  {title : "For doctors", img : "https://www.docplanner.com/icons/icon-doctors.svg", description : "Save time managing visits and cut no-shows by half", bg : "#3d83df"},
  {title : "For cliniks", img : "https://www.docplanner.com/icons/icon-clinics.svg", description : "Deliver an exceptional patient experience in your clinic", bg : "#1b2734"}
]

function Cart(props){
  return(
    <div className="card mr-4" >
    <Card className=""  style={{backgroundColor: props.bg}}>
    <Card.Body>
      <Card.Title><img src={props.img} className="" alt="logo" /></Card.Title>
      <Card.Text className="card-top-text">
        <h2 className="py-2">{props.title}</h2>
        <p className="card-text">{props.description}</p> 
        <Select />
      </Card.Text>
    </Card.Body>
    </Card>
    </div>
  )
}

function Cards(){
  return(
    <div className="container">
    <div className="card-top d-flex px-5 ml-3 mt-5">
       {cards.map(element =>
         <div>
            <Cart title = {element.title} img = {element.img } description = {element.description} bg = {element.bg}/>     
         </div>
       )}
    </div>
  </div>
  )
}

/*
function Cards(){
    return(
 <div  className="container mt-5 pt-3 px-5 mx-5">
    <div className="row top-cards">
    <div className="col-md-4">
    <Card className="card-patients">
    <Card.Body>
      <Card.Title><img src={iconPatients} className="" alt="logo" /></Card.Title>
      <Card.Text>
        <h2 className="py-2">For patients</h2>
        <p className="card-text">Find a doctor, book a visit and solve any health-related doubt</p> 
        <Select />
      </Card.Text>
    </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card className="card-doctors">
    <Card.Body>
      <Card.Title><img src={iconDoctors} className="" alt="logo" /></Card.Title>
      <Card.Text>
        <h2 className="py-2">For doctors</h2>
        <p className="card-text">Save time managing visits and cut no-shows by half</p> 
        <Select />
      </Card.Text>
    </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card className="card-clinics">
    <Card.Body>
      <Card.Title><img src={iconClinics} className="" alt="logo" /></Card.Title>
      <Card.Text>
        <h2 className="py-2">For clinics</h2>
        <p className="card-text">Deliver an exceptional patient experience in your clinic</p> 
        <Clinic/>
      </Card.Text>
    </Card.Body>
    </Card>
    </div>


    </div>
 </div>
    ) 
}*/
  export default Cards