import React from 'react';
import './App.css';
import './css/order_page.css';

// COMPONENTS
// import OrderPage from './component/Order_page';
// import EditOrder from './component/EditOrder';
import NavBar from './component/NavBar';
// import Parent from './component/Parent';
// import Apparel from './component/categories/apparel';
import MainApparel from './component/categories/mainApparel';

function App() {
  return (
    <div >

    <NavBar/>
    {/* <OrderPage/> */}
    {/* <EditOrder/> */}
    {/* <Parent/> */}
    
    <MainApparel/>
     
    </div>
  );
}

export default App;
