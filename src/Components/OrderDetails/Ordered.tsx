import React from 'react'
import UserList from '../../Pages/UserList/UserList'
import './userlists.css'

export default function Ordered(): JSX.Element {
  return (
    <div style={{height:'100%', width: "100%"}}>
      <UserList />
    </div>
  )
}
