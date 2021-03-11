import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

 
class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="footer-container mt-5 pt-5 pl-5"> 
                  <div className="row col-md-12 col-sm-12">
                    <div className="col-md-4 mb-md-0 ">
                            <h5 className="footer-head-text">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a exact href="/home">Home</a></li>
                                <li><a href="/blog">Blog</a></li> 
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                    </div>

                    <div className="col-md-4 mb-md-0 ">
                        <h5 className="footer-head-text" >Support</h5>
                        <ul className="list-unstyled Support-icons-main">
                            <li>
                            <a href="#"><i class="fas fa-envelope fa-lg" aria-hidden="true"></i>help@pooh-poto.com</a>
                            </li>
                        </ul>
                            <h5 className="footer-head-text" >Office Address</h5>
                        <ul className="list-unstyled Support-icons-main">
                            <li>
                            <a href="#"><i className="fas fa-map-marker-alt  fa-lg" aria-hidden="true"></i> Main Road, India</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-md-0 ">
                        <h5 className="footer-head-text" >Social Links</h5>
                        <a href="#" className="pr-2"> <svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.5" viewBox="0 0 31.5 31.5">
<path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square" d="M28.125,2.25H3.375A3.375,3.375,0,0,0,0,5.625v24.75A3.375,3.375,0,0,0,3.375,33.75h9.65V23.041H8.6V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.521,2.521,0,0,0-2.842,2.723V18h4.836l-.773,5.041H18.475V33.75h9.65A3.375,3.375,0,0,0,31.5,30.375V5.625A3.375,3.375,0,0,0,28.125,2.25Z" transform="translate(0 -2.25)" fill="#5b9fd9"/>
                        </svg>
                        </a>
                        {/* <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="38.4" height="27" viewBox="0 0 38.4 27">
  <path id="Icon_awesome-youtube" data-name="Icon awesome-youtube" d="M38.648,8.725a4.825,4.825,0,0,0-3.395-3.417c-2.995-.808-15-.808-15-.808s-12.008,0-15,.808A4.825,4.825,0,0,0,1.852,8.725c-.8,3.014-.8,9.3-.8,9.3s0,6.289.8,9.3a4.753,4.753,0,0,0,3.395,3.362c2.995.808,15,.808,15,.808s12.008,0,15-.808a4.753,4.753,0,0,0,3.395-3.362c.8-3.014.8-9.3.8-9.3s0-6.289-.8-9.3ZM16.323,23.737V12.318l10.036,5.71L16.323,23.737Z" transform="translate(-1.05 -4.5)" fill="#5b9fd9"/>
</svg> </a> */}
<a href="#" className="p-2"><svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.5" viewBox="0 0 31.5 31.5">
  <path id="Icon_awesome-twitter-square" data-name="Icon awesome-twitter-square" d="M28.125,2.25H3.375A3.376,3.376,0,0,0,0,5.625v24.75A3.376,3.376,0,0,0,3.375,33.75h24.75A3.376,3.376,0,0,0,31.5,30.375V5.625A3.376,3.376,0,0,0,28.125,2.25ZM24.687,13.416c.014.2.014.4.014.6a13.031,13.031,0,0,1-13.12,13.12A13.06,13.06,0,0,1,4.5,25.066a9.715,9.715,0,0,0,1.111.056,9.246,9.246,0,0,0,5.723-1.969,4.618,4.618,0,0,1-4.31-3.2,4.97,4.97,0,0,0,2.081-.084,4.612,4.612,0,0,1-3.691-4.528v-.056A4.608,4.608,0,0,0,7.5,15.87,4.6,4.6,0,0,1,5.442,12.03,4.554,4.554,0,0,1,6.068,9.7a13.094,13.094,0,0,0,9.506,4.823,4.621,4.621,0,0,1,7.868-4.212A9.036,9.036,0,0,0,26.367,9.2a4.6,4.6,0,0,1-2.025,2.538A9.177,9.177,0,0,0,27,11.025,9.707,9.707,0,0,1,24.687,13.416Z" transform="translate(0 -2.25)" fill="#5b9fd9"/>
</svg>
</a>
<a href="#" className="p-2"><svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.5" viewBox="0 0 31.5 31.5">
  <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z" transform="translate(0 -2.25)" fill="#5b9fd9"/>
</svg>
</a>



                    </div>
                    </div>
                    <div className="row col-md-12 col-sm-12">
                        <h6 className="footer-head-text mx-auto p-3">© 2020 Copyright: Pooh-Photo  
                    All rights reserved.</h6>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;