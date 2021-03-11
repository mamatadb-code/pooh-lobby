
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link}from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import Blog from './Blog';
import  ContactUs from './ContactUs';
import Header from './header';
import Footer from './footer';



function App() {
  return (
    <Router>
   <div className="container"> 
   <Navbar className="navbar fixed-top" bg="light" expand="md">
        {/* <Navbar.Brand ><img src={mainLogo} className="logo" alt="logo" /></Navbar.Brand> */}
        {/* <Navbar.Brand ><img src={logo} alt="Logo" /><i class="fab fa-adn"></i></Navbar.Brand> */}
        <Navbar.Brand ><svg xmlns="http://www.w3.org/2000/svg" width="27" height="29.25" viewBox="0 0 27 29.25">
  <path id="Icon_ionic-md-flower" data-name="Icon ionic-md-flower" d="M28.484,18a5.206,5.206,0,0,0-2.257-9.928,5.3,5.3,0,0,0-3,.921l.042-.394a5.274,5.274,0,0,0-10.547,0l.042.394A5.235,5.235,0,1,0,7.516,18a5.206,5.206,0,0,0,2.257,9.928,5.3,5.3,0,0,0,3-.921l-.042.394a5.274,5.274,0,0,0,10.547,0l-.042-.394A5.235,5.235,0,1,0,28.484,18ZM18,23.224A5.224,5.224,0,1,1,23.273,18,5.252,5.252,0,0,1,18,23.224Z" transform="translate(-4.5 -3.375)" fill="#2cedde"/>
</svg>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-button" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="padding-left" >
            <Nav.Link exact  href="/Home" className="navlink">Home</Nav.Link>
            
            <Nav.Link  href="/Blog" className="navlink">Blog</Nav.Link>
             
            <Nav.Link  href="/ContactUs" className="navlink contactus-bg">Contact Us</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar> 
    <Switch>
    {/* <Header /> */}
    <Route path="/" exact component= {Home} />
    <Route path="/Home" exact component={Home} />
    <Route path="/Blog"exact component= {Blog} />
    <Route path="/ContactUs" exact component= {ContactUs} />
    <Footer />
    </Switch>
    </div>
    </Router>

   
  );
}

export default App;
