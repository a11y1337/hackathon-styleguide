
import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  window.console.log(props)
  return (
    <div>
      <div>
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
