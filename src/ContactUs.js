import React  from 'react';
import './App.css';
import { Form, Button} from 'react-bootstrap';
// import './ContactUs.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faShare,faFacebook} from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faShare)
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShare } from '@fortawesome/free-solid-svg-icons'
;
import Footer from './footer'

class ContactUs extends React.Component{
    
    render(){
        return(
            <div>
    
                <h1 className="mt-5 p-1 text-center">Contact us</h1>
                 {/* ********* */}
            <div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 contact-description description  m-1 p-2 pt-5 
            pb-5">
        <div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 blog-main">

          <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 map-side">
            <h2> Find us here!</h2>
            <p>
            Lorem ipsum dolor sit amet,
            </p>
            <div className="google-map m-2">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555063226!2d-122.50764039623563!3d37.75781499686788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1615332899507!5m2!1sen!2sus" 
            // width="300" height="300"     
            style={{border:0}}  allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>


          <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 mt-1 form-side">
            <h3 className="form-title"> Happy to Help! </h3>
            <Form onSubmit={this.handleSubmit}>
            <label> First Name  </label> 
            <div className="input-group Form-main">
                 <input type="text"  
                        required="required"
                        name='firstname'
                        onChange={this.handleInputChange} />
                  </div>
                  <label> Last Name  </label> 
                  <div className="input-group Form-main">
                  <input type="text"  
                         required="required" 
                         name='lastname'
                         onChange={this.handleInputChange} />
                
                </div>
                <label> Email  </label> 
                <div className="input-group Form-main">
                  <input type="email"  
                         required="required" 
                         name='email'
                         onChange={this.handleInputChange} />
              
                  </div>
                  <label> Phone Number </label> 
                  <div className="input-group Form-main">
                  <input type="phone"  
                         required="required" 
                         name='phone'
                         onChange={this.handleInputChange} />
                  
                  </div>
                  <Button className="btn send-button"> 
                  SUBMIT
                  {/* button need to updaate  */}
                  {/* <FontAwesomeIcon icon={faShare} /> */}
                  </Button>
             
            </Form>
            </div>
            </div>
            </div>
        <Footer />
            </div>
        )
    }
}
export default  ContactUs;
