import React from 'react';
import '../css/order_page.css'
const OrderPage = ()=> {

    return(
        <div>
          
            
            

            <div class="container">
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-5">
                        <h1>CREATE STORE</h1>
                        <br/>
                        <br/>
                        <br/>
                        
                        <input type="text" placeholder="Page Title" /><br/><br/>
                        <input type="text" placeholder="Keywords" />
                        <br/><br/>
                        <h2>Location on page</h2>
                        <input type="radio" name ="footer" value="Footer"/> Footer<br/>
                        <input type="radio" name ="footer" value="Header"/> Header<br/><br/>
                        <h2>Select Pages for script</h2>
                        <input type="radio" name ="store" value="Store"/> Store<br/>
                        <input type="radio" name ="store" value="Checkout"/> Checkout<br/>
                        <input type="radio" name ="store" value="Confirmation"/> Confirmation<br/>
                        <input type="radio" name ="store" value="All"/> All<br/>

                    </div>

                    <div class="col-sm-5">
                        <br/>
                        <br/>
                        <br/><br/><br/>
                        <h3 style={{ marginTop:'19px'}}>Loading Method</h3><br/>
                        <input type="text" placeholder="default" /><br/>
                        <input type="text" placeholder="Jibberish" />
                    </div>
                </div>
            </div>






            
        </div>
    
    )
}

export default OrderPage;


