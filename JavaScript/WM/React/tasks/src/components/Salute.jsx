import React from 'react';

export default props => [
  <h1 key="key0">I salute you, {props.name}-kun.</h1>,
  <h2 key="key1">Soste, Abayo!</h2>
]

// export default props => 
//   <React.Fragment>
//     <h1>I salute you, {props.name}-kun.</h1>
//     <h2>Soste, Abayo!</h2>
//   </React.Fragment>