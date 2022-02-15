import React, { Component } from 'react';

class TimerClass extends Component {
    state = {
        seconds : 0,
        minutes : 0,
        hours : 0,
        time : false,
        interval : null
     } 

      handleStart =() =>{
        this.setState({time:true})
        console.log(this.state.time);
     }
    
      handleRestart =() =>{
        clearInterval(this.state.interval)
       this.setState({seconds:0});
       this.setState({minutes : 0});
       this.setState({hours : 0});
       this.setState({time: !this.state.time})
     };
    
      handleStop =()=>{
        console.log(this.state);
        this.setState({time :!this.state.time});
     }

     shouldComponentUpdate(nextProps, nextState){
        if(this.state.time !== nextState.time){
          const tempInterval = setInterval(() => { 
              this.setState({seconds : this.state.seconds + 1})
            }, 1000);
          this.setState({interval :tempInterval});

          if (this.state.seconds === 60) {
            this.setState({minutes : this.state.minutes + 1});
            this.setState({seconds : 0});
          } 
          if (this.state.minutes === 60) {
            this.setState({hours : this.state.hours + 1});
            this.setState({minutes : 0});
            this.setState({seconds : 0});
          }
        } 
        return true;

     }

     componentWillUnmount(){
       clearInterval(this.state.interval)
     }

    render() {
        return (
            <div className="mt-5 w-50 ml-0 mr-0 mx-auto text-center">
      <div className="container">
        <h1>Timer</h1>
        <h3>
          {this.state.hours < 10 ? "0" + this.state.hours : this.state.hours} :{" "}
          {this.state.minutes < 10 ? "0" + this.state.minutes : this.state.minutes} :
          {this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds}
        </h3>
        <div className="container">
        <button className="btn btn-primary p-2 mx-4 mt-2"
                  onClick={this.handleStart}>Start</button>
          <button className="btn btn-warning p-2 mx-4 mt-2"
                  onClick={this.handleRestart}> Re-Start</button>
          <button className="btn btn-danger p-2 mx-4 mt-2" 
                   onClick={this.handleStop}>Stop</button>
        </div>
      </div>
    </div>
        );
    }
}
 
export default TimerClass;