import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

 
class Res extends React.Component{
    render(){
        return(
            <div>
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
            </div>
        );
    }
}
export default Res;