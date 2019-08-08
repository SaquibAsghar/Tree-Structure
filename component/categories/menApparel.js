import React,{ Fragment} from 'react';
import './apparelCSS/apparel.css';
import Tops from './tops';
const menApparel = () => {
    return (
        <Fragment>
            <input type="checkbox" />&nbsp;
            <span className="glyphicon glyphicon-folder-open"></span>&nbsp; Men
            <Tops/>
            
        </Fragment>
    )
}

export default menApparel ;
