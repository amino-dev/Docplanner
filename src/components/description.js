import img from '../img/Docplanner-Group.png'
import flag from '../img/flag.png'
import visits from '../img/visits.png'
import patients from '../img/patients.png'
import doctors from '../img/doctors.png'
function Description(){
    return(
  <section  className="description-section mb-5 pt-2">
    <div className="row">
       <div className="col-md-6">
           <div className="px-5">
             <h2 className="description-text px-5 pt-5">The world's biggest healthcare platform </h2>
              <p  className="description-paragraph px-5 pt-3">We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries. </p>
           </div>
           <img src={img} className="pt-3" alt="img" />
       </div>
       <div className="col-md-6">
           <div>
              <div className="row">
                  <div className="col-md-5 col-12 description-card mt-4 mr-3">
                    <img className="pt-4 pl-3" src={flag} alt="img"/>
                    <h4 className="pt-3 pl-3">Leader in 12 countries</h4>
                    <p className="description-paragraphs pt-2 pl-3">Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile </p>
                  </div>
                  <div className="col-md-5 col-12 description-card mt-2 mr-3">
                    <img className="pt-3 visits-img" src={visits} alt="img"/>
                    <h4 className="pt-3">4.8 million appointments</h4>
                    <p className="description-paragraphs pt-2">booked last month</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-5 col-12 description-card mt-3 mr-3">
                    <img className="pt-4 " src={patients} alt="img"/>
                    <h4 className="pt-3">61.9 mln unique patients</h4>
                    <p className="description-paragraphs pt-2 pl-3">visit our websites each month</p>
                  </div>
                  <div className="col-md-5 col-12 description-card">
                    <img className="pt-3 doctors-img" src={doctors} alt="img"/>
                    <h4 className="pt-3">92.5k active  <br></br>doctors</h4>
                    <p className="description-paragraphs pt-2">trust our solutions</p>
                  </div>
              </div>
           </div>
       </div>
    </div> 
  </section>
) }

  export default Description