import React from 'react'

// export default props => <h1>Props.name = <i>{props.name}</i></h1> 
// export default function propsFunction (props) {
//   return <React.Fragment>
//     <h1>Props.name = <i>{props.name}</i></h1> <h1>Props.age = {props.age}</h1>
//   </React.Fragment>
// }

const propsExport = props => [
  <h1 key="title">Props.jsx</h1>,
  <h2 key="PropsName">Props.name = <i>{props.name}</i></h2>,
  <h2 key="PropsAge">Props.age = {props.age}</h2>,
  <hr key="hr"/>
]

export default propsExport;