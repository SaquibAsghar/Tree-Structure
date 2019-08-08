import React,{ Fragment} from 'react'
import MenApparel from './menApparel';
import WomenApparel from './womenApparel';
import KidsApparel from './kidsApparel';

const apparel = () => {
    return (
        <Fragment>
            <ul className="menUl">
                <li>
                <input type="checkbox" />&nbsp;
                <span className="glyphicon glyphicon-folder-open" style={{fontSize:"20px"}}></span>&nbsp; 
                Apparel
                </li>
                
                    <ul>
                        <MenApparel/>
                    </ul>
    
        
                    <ul>
                        <WomenApparel/>
                    </ul>

                    <ul>
                        <KidsApparel/>
                    </ul>

            </ul>
        </Fragment>
    )
}

export default apparel;
