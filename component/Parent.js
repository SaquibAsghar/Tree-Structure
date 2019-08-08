import React,{ Component, Fragment} from 'react';
import ParentMenChild from './ParentMenChild';

// import '../css/parent.css';

class Parent extends Component {

    showApparelHandler =()=>{
        console.log("Clicked me")
    }

    render(){ 
    return (
        <Fragment>
            <h1>this is Parent component</h1><br/>
            <ul id="myUL" >
                <li><span className="box" onClick={this.showApparelHandler}>Apparel</span>
                    <ul className="nested">
                        <li>Men</li>
                        <ul className="nested"> 
                                <li>Tops</li>
                                <ul> 
                                    <ParentMenChild/>
                                </ul>
                            </ul>
                        <li className="box">Women</li>
                        <ul className="nested">
                                <li>Tops</li>
                                <ul> 
                                    <ParentMenChild/>
                                </ul>
                            </ul>
                        <li><span className="box">Kid</span>
                        <ul className="nested">
                                <li>Tops</li>
                                <ul> 
                                    <ParentMenChild/>
                                </ul>    
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            
        </Fragment>
    )
}
}

export default Parent
