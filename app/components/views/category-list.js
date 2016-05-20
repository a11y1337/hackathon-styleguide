import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.categories.map(category => {
        window.console.log(category.name)
        return (
          <div key={category.id} style={{display: 'flex', flexDirection: 'row'}}>
            <div className="details">
              <Link to={'/categories/' + category.id}>{category.name}</Link>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <button onClick={props.deleteCategory.bind(null, category.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
