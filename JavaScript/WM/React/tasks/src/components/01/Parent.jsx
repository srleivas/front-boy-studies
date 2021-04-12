import React from 'react';
// import Children from './Children';

export default function props (props) {
  return ( 
    <div>
      <h1>{props.name} {props.surname}</h1>
      <h2>Children: </h2>
      <ul>
        {/* < Children name={"Child01"} surname={props.surname} />
        < Children {...props}/>
        < Children {...props} name = "Child03"/> */}
        {/* {props.children} */}
      </ul>
    </div>
  )
}