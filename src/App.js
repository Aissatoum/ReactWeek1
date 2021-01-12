import React from 'react';
import './App.css';
import Person from "./Person/basicInfo";

class App extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    persons : [
      {
        name: "Eliza" ,number:"7042345456" ,age:22,
      },
      {
        name: "Richard", number:"7041233445", age:19
      },
      {
        name: "Amela", number:"7043457896", age:25
      }
    ]
  }
  render(){
  return (
    <div className="head">
      <h1>React Challenge solution</h1>
      <Person name= {this.state.persons[0].name} number={this.state.persons[0].number} age={this.state.persons[0].age} />
      <Person name= {this.state.persons[1].name} number={this.state.persons[1].number} age={this.state.persons[1].age}/>
      <Person name= {this.state.persons[2].name} number={this.state.persons[2].number} age={this.state.persons[2].age}/>
    </div>
  );
  }
}

export default App;
