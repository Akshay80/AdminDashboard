import React from 'react'
import { Link } from 'react-router-dom'
import './SalesHeader.css'

function SalesHeader() {
    return (
        <div className="sales-wrapper">
            <ul className="sales-menu-list">
                <li className="sales-menu">
                    <Link to="/dashboard/sales/ordered-items">
                    ORDERED
                    </Link>
                </li>
                <li className="sales-menu">
                <Link to="/dashboard/sales/delivered-items">
                    DELIVERED
                    </Link>
                </li>
                <li className="sales-menu">
                <Link to="/dashboard/sales/cacelled-items">
                   CANCELLED
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SalesHeader
