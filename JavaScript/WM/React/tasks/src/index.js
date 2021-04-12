import React from 'react';
import ReactDOM from 'react-dom';

// Section 01 Imports/
import Children from './components/01/Children';
import { Export1, Export2, Title } from './components/01/Multiple';
import Parent from './components/01/Parent';
import Props from './components/01/Props';
import Salute from './components/01/Salute';

// Section02 Imports;
import First02 from './components/02/First02';

// Script Activation Btn;
const section = document.getElementById('section');
document.querySelectorAll('.component').forEach(button => {
  button.addEventListener('click', e => {
    switch (e.target.value) {
      case "1": 
        section.innerHTML = "";
        component01();
        break;
      case "2": 
        section.innerHTML = "";
        component02();
        break;
      default:
        break;
    }
  });
})

// Section 01
function component01() {
  const first = document.createElement('div'); first.setAttribute('id', 'first');
  const props = document.createElement('div'); props.setAttribute('id', 'props');
  const multiple = document.createElement('div'); multiple.setAttribute('id', 'multiple');
  const salute = document.createElement('div'); salute.setAttribute('id', 'salute');
  const otosan = document.createElement('div'); otosan.setAttribute('id', 'otosan');

  document.querySelector('#section').append(first, props, multiple, salute, otosan);

  ReactDOM.render(< Props name="Aiko" age={21} />, document.getElementById('props'));
  ReactDOM.render(
    <div>
      < Title />
      < Export1 value="X1" />
      < Export2 value="X2" />
      <hr />
    </div>
    , document.getElementById('multiple'));

  ReactDOM.render(
    <div>
      < Salute type="Salute" name="Comrade" />
    </div>
    , document.getElementById('salute'))

  ReactDOM.render(
    <div>
      < Parent name="Dad" surname="Sama" >
        < Children name="Child01" surname="Sama" />
        < Children name="Child02" surname="Sama" />
        < Children name="Child03" surname="Sama" />
      </ Parent >
    </div>
    , document.getElementById('otosan'))
}

// Section 02
function component02 () {
  const first02 = document.createElement('div'); first02.setAttribute('id', 'first02');

  document.querySelector('#section').append(first02);
  
  ReactDOM.render(
    < First02 />
  , document.getElementById("first02"))
}
