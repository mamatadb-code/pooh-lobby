import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './Home.css';
import {Carousel} from 'react-bootstrap';
import img1 from './images/img1.JPG';
import img2 from './images/img2.JPG';
import img3 from './images/img3.JPG';
import Footer from './footer'

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1 className="p-5 mt-4 text-center">Home</h1>
                
  {/* -------- Carousel----------- */}
      <Carousel className="slides">
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://images.unsplash.com/photo-1590503002569-c09d4ddfd698?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                alt="First slide" 
                height="350" width="750"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                alt="Second slide" height="350" width="750"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1592312040834-bb0d621713e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                alt="Third slide" height="350" width="750"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> 

{/* Company Description */}
<div className="container company-description p-5 mt-5">
  <div claassName=" company-description">
  <div className="row company-description col-12 col-lg-12 col-md-12 col-sm-12">
    <h2> Company Description</h2>
    <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
  </div>
  </div>
</div>

       
    

{/* Blogs on home page Blog1 */}
<div className="blogContainer mt-3 p-1 pt-4 padding-home-blog">
<div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 blog-1-section-main">
          <div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 blog-1-section">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 blog-1-section-img">
              <img className="img1 p-2" src={img1} />
              {/* <img className="img1" src="https://images.unsplash.com/photo-1592312040834-bb0d621713e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" /> */}
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 blog-1-section-text">
              <h3>Creating Blog One </h3>
              <p className="bold-p-text">9 March 2021. <span className="bloger-name"> Sweta </span></p>
              <p className="home-blog-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
              </p>
              <button type="button" className="btn btn-light temp-btn ">Categories:   Food, Photo</button>
            </div>
          </div>
        </div>
</div>

{/* Blogs on home page Blog2 */}
<div className="blogContainer mt-3 p-1 pt-4">
<div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 blog-1-section-main ">
          <div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 blog-1-section blogging">
            <div className="col-md-6 col-lg-6  col-sm-12 col-xs-12 blog-1-section-img">
              <img className="img1" src={img2} />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 blog-1-section-text">
              <h3>Creating Blog  Two </h3>
              <p className="bold-p-text">9 March 2021. <span className="bloger-name"> Nidhi </span></p>
              <p className="home-blog-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
              </p>

              <button type="button" className="btn btn-light temp-btn">Categories:  Art, Photo</button>
            </div>
          </div>
        </div>
</div>
< Footer />
            </div>
        );
    }
}
export default Home;
