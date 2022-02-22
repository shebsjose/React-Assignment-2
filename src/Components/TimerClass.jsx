import React, { Component } from 'react';

class TimerClass extends Component {
    state = {
        seconds : 0,
        minutes : 0,
        hours : 0,
        start : false,
        interval : null
     } 

      handleStart =() =>{
        const tempInterval = setInterval(() => { 
          this.setState({seconds : this.state.seconds + 1})
        }, 1000);
        this.setState({interval :tempInterval, start: true});
     }

     componentDidUpdate = () => {
       const { hours, minutes, seconds } = this.state;
      if (this.state.seconds === 60) {
        this.setState({minutes : minutes + 1, seconds: 0});
      } 
      if (this.state.minutes === 60) {
        this.setState({hours : hours + 1, minutes: 0, seconds: 0});
      }
    }
    
    handleRestart =() =>{
      clearInterval(this.state.interval)
      this.setState({seconds:0, minutes: 0, hours: 0});
      const tempInterval = setInterval(() => { 
        this.setState({seconds : this.state.seconds + 1})
      }, 1000);
      this.setState({interval :tempInterval, start: true});
    };
    
      handleStop =()=>{
        console.log(this.state);
        if (this.state.interval) {
          clearInterval(this.state.interval);
          this.setState({start: false});
        }
     }

     componentWillUnmount(){
       clearInterval(this.state.interval)
     }

    render() {
      const { hours, minutes, seconds, start } = this.state;
        return (
            <div className="mt-5 w-50 ml-0 mr-0 mx-auto text-center">
      <div className="container">
        <h1>Timer</h1>
        <h3>
          {hours < 10 ? "0" + hours : hours} :{" "}
          {minutes < 10 ? "0" + minutes : minutes} :
          {seconds < 10 ? "0" + seconds : seconds}
        </h3>
        <div className="container">
          {!start && <button className="btn btn-primary p-2 mx-4 mt-2"
                    onClick={this.handleStart}>Start</button>}
          {start && <button className="btn btn-warning p-2 mx-4 mt-2"
                    onClick={this.handleRestart}> Re-Start</button>}
          {start && <button className="btn btn-danger p-2 mx-4 mt-2" 
                   onClick={this.handleStop}>Stop</button>}
        </div>
      </div>
    </div>
        );
    }
}
 
export default TimerClass;