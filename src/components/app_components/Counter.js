import React, { Component } from 'react';
import Time from './counter_components/Time';
import Form from './counter_components/Form';
import '../../styles/Header.css';

class Counter extends Component {
    constructor(props) {
    super(props);
    this.state = {
      count: 0, timeStatus:"stopped"
    };
    this.incrementer = null;
  }
    handleStartClick(status){
      switch (status) {

        case "started":
       this.setState({timeStatus:status});
        this.incrementer = setInterval( () =>
            this.setState({
             count: this.state.count + 1
           })  , 1000);
        break;

        case "stopped":
        this.setState({timeStatus:status});
        clearInterval(this.incrementer);
          break;

        case "reset":
        clearInterval(this.incrementer);
         this.setState({
            count: 0
          });
          break;
      }
    }
  render() {
    return (
      <div className="row">
  <div className="col-md-4 col-md-offset-4">
    <div className="thumbnail">
      <div className="caption">
      <Time seconds={this.state.count}/>
      <Form seconds={this.state.current} btn={this.state.timeStatus} click={this.handleStartClick.bind(this)}/>

      </div>
    </div>
  </div>
</div>);
  }
}
export default Counter;
