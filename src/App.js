import React from 'react';
import './App.css';

import PrototypeOne from './Components/PrototypeOne.js';
import PrototypeTwo from './Components/PrototypeTwo.js';
import PrototypeThree from './Components/PrototypeThree.js';

function App() {
  return (
    <div className="App">
      <ul uk-accordion="true">

        <li className="">
          <a className="uk-accordion-title" href="#">Hide card feature: Demo -- Post in card</a>
          <div className="uk-accordion-content">
            <PrototypeOne />
          </div>

        </li>


        <li className="">
          <a className="uk-accordion-title" href="#">Hide card feature: Demo -- Click card to see post (text below)</a>
          <div className="uk-accordion-content">
            <PrototypeTwo />
          </div>


        </li>

        <li className="">
          <a className="uk-accordion-title" href="#">Hide card feature: Demo -- Click card to see post (text overlay)</a>
          <div className="uk-accordion-content">
            In progress!
          </div>


        </li>
      </ul>



    </div>
  );
}

export default App;
