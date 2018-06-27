import React from 'react';

class Bomb extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      secondsLeft: parseInt(props.initialCount)
    }
  }

  stuffToRender = () => {
    if (this.state.secondsLeft === 0) {
      return 'Boom!'
    } else {
    return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    return (
      <div>
        <h1>{this.stuffToRender()}</h1>
      </div>
    )
  }

}

export default Bomb;
