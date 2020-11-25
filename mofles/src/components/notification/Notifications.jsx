import React, { useEffect, useState } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
 

const Notification = (props) => {
   

    useEffect(()=>{
        
    createNotification(props.type,props.message)
    },[props.type])


   const createNotification = (type,mensaje) => {
     
          switch (type) {
            case 'info':
              NotificationManager.info(` ${mensaje}` );
              break;
            case 'success':
              NotificationManager.success(`${mensaje}`);
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
            //   NotificationManager.error(`${mensaje}`, 'Click me!', 5000, () => {
            //     alert('callback');
            //   });
              NotificationManager.error(`${mensaje}`);
              break;
          }
       
      };
    return (  
        <div>
        {/* <button className='btn btn-info'
          onClick={e=>createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={e=>createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={e=>createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={e=>createNotification('error')}>Error
        </button> */}
 
        <NotificationContainer/>
      </div>
    );
}
 
export default Notification;


