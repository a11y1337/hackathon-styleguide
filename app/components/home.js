import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>Welcome</h1>
        <p>
          Use this reference.<br /><br />
          <a style={{color: 'blue', textDecoration: 'underline'}} href="/categories">Visit the components page </a>
        </p>
      </div>
    )
  }
})

export default Home
