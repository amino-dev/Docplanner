import iconPatients from '../img/icon-patients.svg'
import iconDoctors from '../img/icon-doctors.svg'
import iconClinics from '../img/icon-clinics.svg'
import {Card} from "react-bootstrap"
import  Select  from "./select"
import  Clinic from "./clinik-select"
function Cards(){
    return(
 <div  className="d-flex mt-5 px-5 mx-5">
    <div className="">
    <Card className="card card-patients p-2 ml-5 mr-3">
    <Card.Body>
      <Card.Title><img src={iconPatients} className="" alt="logo" /></Card.Title>
      <Card.Text>
        <h3 className="py-2">For patients</h3>
        <p className="card-text">Find a doctor, book a visit and solve any health-related doubt</p> 
        <Select />
      </Card.Text>
    </Card.Body>
    </Card>
    </div>
    <div className="">
    <Card className="card  card-doctors p-2 mr-3">
    <Card.Body>
      <Card.Title><img src={iconDoctors} className="" alt="logo" /></Card.Title>
      <Card.Text>
        <h3 className="py-2">For doctors</h3>
        <p className="card-text">Save time managing visits and cut no-shows by half</p> 
        <Select />
      </Card.Text>
    </Card.Body>
    </Card>
    </div>
    <div className="">
    <Card className="card card-clinics p-2">
    <Card.Body>
      <Card.Title><img src={iconClinics} className="" alt="logo" /></Card.Title>
      <Card.Text>
        <h3 className="py-2">For clinics</h3>
        <p className="card-text">Deliver an exceptional patient experience in your clinic</p> 
        <Clinic/>
      </Card.Text>
    </Card.Body>
    </Card>
    </div>
 </div>
    ) 
}
  export default Cards