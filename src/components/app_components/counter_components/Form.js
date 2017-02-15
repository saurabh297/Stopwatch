import React, { Component } from 'react';
import Counter from '../../app_components/Counter';



class Form extends Component{

  render() {
    // var start = this.props.btn;
    var {click,btn}=this.props;
    var renderButton=function() {
      if (btn==="stopped")
      return   <button type="button" className="btn btn-success" onClick={()=>{click("started")}}>START</button> ;
      else
      return   <button type="button" className="btn btn-danger"  onClick={()=>{click("stopped")}}>STOP</button>;
    }


  return (<div>
    { renderButton()}
      <button type="button" className="btn btn-info" onClick={()=>{click("reset")}}>RESET</button>
      </div>);

}
}

export default Form;
