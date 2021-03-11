import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,Card } from 'react-bootstrap';
import Footer from './footer'
import './App.css';
import './Blog.css';
import Res from './res'



class Blog extends React.Component{
    render(){
        return(
        <div>
         <h1 className="mt-5 p-5 text-center main-blog">BLOG</h1>

         {/* <!----------------title main image section--> */}
        <div className="hero-section p-3">
            <div className="container row">
                <div className="hero-text">
                    <h2>Lorem Ipsum Title Here </h2>
                    <p>This is simple test text This is simple test text This is simple test text This is simple test text This is simple test textv This is simple test text</p>
                    <button className="blog-button"> Click  </button>
                </div>
                
                <div className="hero-img">
                    <img className="image" src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"alt="random image" />
                </div>
            </div>
        </div>
         {/* Blog Cards */}
           <div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 nature-section m-1 p-1 pt-5 pb-5">
              <div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 blog-main">

                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 blog-row-1 ">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60100px180" />
                            <Card.Body>
                                <Card.Title>Nature Photo</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <button className="blog-button"> Read More</button>
                            </Card.Body>

                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 blog-row-1">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60100px180" />
                    <Card.Body>
                        <Card.Title>Nature Photo</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <button className="blog-button"> Read More</button>
                    </Card.Body>
           </div>
         </div>
    </div>
          {/* *****Row 2***** */}
          <div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12  m-1 p-1 pt-2">
        <div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 blog-main">

          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 blog-row-2">
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
                            <Card.Body>
                                <Card.Title>Nature Photo</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <button className="blog-button"> Read More</button>
                            </Card.Body>

          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 blog-row-2">
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
                            <Card.Body>
                                <Card.Title>Nature Photo</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <button className="blog-button"> Read More</button>
                            </Card.Body>
          </div>
          </div>
          </div>

            {/* ********* */}
            <div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 description m-2 p-2 pt-4 pb-4">
        <div className="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 blog-main">

          <div className="col-md-6 col-lg-6 text-para">
            <h2> Nature </h2>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
            </p>
          </div>


          <div className="col-md-6 col-lg-6 text-para-2">
            <h3> Photography is Fun </h3>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.   
            </p>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
            </p>
            </div>
            </div>
            </div>
{/* Section */}
<div className="section-art col-lg-12 col-md-12 col-xs-12 col-sm-12 mt-5">
    <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 section-art-style">
        <div className="section-art-style-blog">
            <h3> Heading</h3>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 section-art-style">
        <div className="section-art-style-blog">
            <h3> Heading</h3>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-1 section-art-style">
        <div className="section-art-style-blog">
            <h3> Heading</h3>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 section-art-style">
            <div className="section-art-style-blog">
            <h3> Heading</h3>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
            </div>
        </div>
    </div>
</div>

            <Footer />
            <Res />
            </div>
        )
    }
}
export default Blog;
