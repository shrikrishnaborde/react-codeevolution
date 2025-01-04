import { Component } from "react";

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  incrementCount(){
    //wrong way
    // this.state.count = this.state.count + 1;
    
    this.setState((prevState) => ({
      count: prevState.count + 1
    }), () => {
      console.log('Callback value', this.state.count);
    })

    //wrong way
    //console.log(this.state.count);
  }

  incrementCountByFive(){ 
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementCountByFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter;