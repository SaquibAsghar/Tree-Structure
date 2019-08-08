import React, { Fragment} from 'react'

class Tops extends React.Component {

    state={
        tops:["T-shirts","Tops","Sweatshirt","Hoodie","Jackets"]
    }

    render(){ 
    return (
        <Fragment>
            {/* <ul className="menUl">
                <li><input type="checkbox" name="tops1" value="T-shirts" />&nbsp;T-shirts</li>
                <li><input type="checkbox" name="tops2" value="Tops" />&nbsp;Tops</li>
                <li><input type="checkbox" name="tops3" value="Sweatshirt" />&nbsp;Sweatshirt</li>
                <li><input type="checkbox" name="tops4" value="Hoodie" />&nbsp;Hoodie</li>
                <li><input type="checkbox" name="tops5" value="Jackets" />&nbsp;Jackets</li>
            </ul> */}
            <ul className="menUl">
                {
                    this.state.tops.map((el,index) => {
                        return (
                            <li key={index} >
                            {
                                //  for checkbox
                                <input type="checkbox" name={`${el}`} value={`${el}`} />
                                
                            }
                            {/* for circle icon  */}
                            < i  className="material-icons" 
                                style={{color:"grey",fontSize:"10px"}} 

                            > &#xe061;</i>     
                            {/* printing the top array */}
                            &nbsp;{el} 

                            </li>

                            )   // return statement closes here
                        }       
                    )   // map parenthesis close here 
                }
            </ul>
        </Fragment>
        )
    }
}

export default Tops;
