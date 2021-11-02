import React from 'react'
import './user.css';
import Button from '@mui/material/Button';
import { Add, PermIdentity, CalendarToday, PhoneAndroid, MailOutline,LocationCity} from '@mui/icons-material';
import avatar from '../../images/avatar10.jpg';

export default function User() {
    return (
        <div className="users">
           <div className="userTitleContainer">
               <h3 className="userTitle">
                Edit Users
               </h3>
               
               <div>
               <Button variant="contained"  color="primary" startIcon={<Add />} style={{fontWeight: 500}}>Create</Button>
               </div>      
           </div>
           <div className="userContainer">
                   <div className="userShow">
                       <div className="userShowTop">
                           <img src={avatar} alt="User_Images" className="userShowImage"/>
                        <div className="userShowUserTopTitle">
                           <div className="userShowUserName">Akshay Bisht</div>
                           <div className="userShowUserTitle">Software Engineer</div>
                       </div>
                       </div>
                    <div className="userShowBottom">
                    <span className="userShowTitle">Account Details : </span>
                        

                        <div className="userShowInfo">
                        <PermIdentity className="icons"/>
                        <span className="userShowInfoTitle">Akshay Bisht</span>
                        </div>
                        

                        <div className="userShowInfo">
                        <CalendarToday className="icons"/>
                        <span className="userShowInfoTitle">20/02/1995</span>
                        </div>


                        <span className="userShowTitle">Contact Details : </span>
                        <div className="userShowInfo">
                        <PhoneAndroid className="icons"/>
                        <span className="userShowInfoTitle">+91-8218277173</span>
                        </div>



                        <div className="userShowInfo">
                        <MailOutline className="icons" />
                        <span className="userShowInfoTitle">akshay.bisht@gmail.com</span>
                        </div>



                        <div className="userShowInfo">
                        <LocationCity className="icons" />
                        <span className="userShowInfoTitle">India</span>
                        </div>

                    </div>
                   </div>
                   <div className="userUpdate">
                       
                   </div>
               </div>
        </div>
    )
}
