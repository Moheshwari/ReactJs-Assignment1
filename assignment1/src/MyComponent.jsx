import React from 'react'
import Home from './Home'
import Contact from './Contact'

const MyComponent = (props) =>{
    console.log(props,'==props');
   
   
       return(
           <div>
             <p>Wecome to our page!!</p>
              <p>{props.name}</p>
              <p>{props.Home}</p>
              <p>{props.Contact}</p>
              <p>{props.About}</p>
              <p>{props.componentName}</p>
           </div>
       );
   }

export default MyComponent;