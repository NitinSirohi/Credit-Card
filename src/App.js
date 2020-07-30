import React,{Component} from "react";
import "./App.css"

class App extends Component{
  constructor(){
    super();
    this.state={
      value:''
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextChange2 = this.handleTextChange2.bind(this);
    this.handleTextChange3 = this.handleTextChange3.bind(this);
    this.handleTextChange4 = this.handleTextChange4.bind(this);
  }



  handleTextChange=(e)=> {
     this.setState({ value: e.target.value });
    if (e.target.value.length === 4) {
    this.input2.focus();
    }

  }

  handleTextChange2=(e)=> {
    this.setState({ value: e.target.value });
   if (e.target.value.length === 4) {
   this.input3.focus();
   }
   if (e.target.value.length === 0) {
    this.input1.focus();
  }

  
 }

 handleTextChange3=(e)=> {
  this.setState({ value: e.target.value });
 if (e.target.value.length === 4) {
   
 this.input4.focus();
 }
 if (e.target.value.length === 0) {
  this.input2.focus();
}
}

handleTextChange4=(e)=> {
  this.setState({ value: e.target.value });
 if (e.target.value.length === 4) {
   
 this.input4.blur();
 }
 if (e.target.value.length === 0) {

  this.input3.focus();
}
}
 
render(){
  return(
    <div style={{  backgroundColor: '#c0c0de',
    margin: '10px 10px 10px 10px',
    textalign: 'center',
    padding: '50px 20px',
    }}>
      <span>Credit Card No:</span>
      
      
<input id="textbox1"   ref={(input) => this.input1 = input}className="textbox"  onKeyUp={this.handleTextChange} />
<input id="textbox2"  ref={(input) => this.input2 = input}  className="textbox"  onKeyUp={this.handleTextChange2}/>
<input id="textbox3"  ref={(input) => this.input3 = input}  className="textbox"  onKeyUp={this.handleTextChange3} />
<input id="textbox4"  ref={(input) => this.input4 = input}  className="textbox"   onKeyUp={this.handleTextChange4} />


    </div>
  )
}
}

export default App;