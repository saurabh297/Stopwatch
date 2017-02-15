import React, { Component } from 'react';
import '../../../styles/Header.css';


const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


class Time extends React.Component {
  constructor(props) {
    super(props);

  }

  // handleResetClick() {
  //   clearInterval(this.incrementer);
  //   this.setState({
  //     secondsElapsed: 0,
  //     laps: []
  //   });
  // }
  //
  // handleLabClick() {
  //   this.setState({
  //     laps: this.state.laps.concat([this.state.secondsElapsed])
  //   })
  // }

  render() {
    var current = this.props.seconds;
    return (
      <div className="Time">
        <h1 className="Counter">{formattedSeconds(current)}</h1>
        </div>

      );}
  }
  export default Time;
