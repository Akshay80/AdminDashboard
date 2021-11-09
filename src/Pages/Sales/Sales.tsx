import React from 'react'
import { Route, Switch } from 'react-router'
import OrderedList from '../../Components/OrderDetails/Ordered'
import DeliveredList from '../../Components/OrderDetails/Delivered'
import CancelledList from '../../Components/OrderDetails/Cancelled'
import SalesHeader from '../../Components/SalesHeader/SalesHeader'
import './sales.css'
import { BrowserRouter } from 'react-router-dom'

function Sales() {
    return (
        <div className="Sales-container">
            <BrowserRouter>
           <SalesHeader />
           <Switch>
               <Route exact path="/dashboard/sales/ordered-items"> <OrderedList/> </Route>
               <Route exact path="/dashboard/sales/delivered-items"> <DeliveredList/> </Route>
               <Route exact path="/dashboard/sales/cacelled-items"> <CancelledList/> </Route>
           </Switch>
           </BrowserRouter>
        </div>
    )
}

export default Sales
