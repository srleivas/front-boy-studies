import React, {Component} from 'react';

export default class Salute extends Component {

  state = {
    // type: this.props.type,
    // name: this.props.name
  }

  constructor (props) {
    super(props);
    
    this.setType = this.setType.bind(this)
    this.setName = this.setName.bind(this)
  }

  setType (e) { this.setState({ type: e.target.value }) }
  setName (e) { this.setState({ name: e.target.value }) }

  render () {
    // const { type, name} = this.props;
    const { type, name } = this.state;

    return (
      <div>
      <h1>
        Type = {type ? type.charAt(0).toUpperCase() + type.slice(1) : "Picapau"} <br/> 
        Name = {name ? name.charAt(0).toUpperCase() + name.slice(1) : "Biruta"}</h1>
      <hr/>
      {/* <input onChange={e => this.setType(e)} type="text" placeholder="Type..." value={type ? type : ""}/>
      <input onChange={e => this.setName(e)} type="text" placeholder="Type..." value={name ? name : ""}/> */}
      
      <input onChange={this.setType} type="text" placeholder="Type..." value={type ? type : ""}/>
      <input onChange={this.setName} type="text" placeholder="Type..." value={name ? name : ""}/>
      </div>
    )
  }
}