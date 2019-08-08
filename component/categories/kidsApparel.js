import React,{ Fragment} from 'react';
import './apparelCSS/apparel.css';
import Tops from './tops';

const kidsApparel = () => {
    return (
        <Fragment>
            <input type="checkbox" />&nbsp;
            <span className="glyphicon glyphicon-folder-open"></span>&nbsp; Kids
            <Tops/>
            
        </Fragment>
    )
}

export default kidsApparel;
