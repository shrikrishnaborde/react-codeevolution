import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const {name, heroName, children} = this.props;  // Destructuring props
    return (
      <div>
        <h1>Welcome {name} a.k.a {heroName}</h1>
        {children}
      </div>

    );
  }
}

export default Welcome;