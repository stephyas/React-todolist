import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItems from './ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentitem:{
        text:'',
        key:''
      }
    }
    this.handleinput=this.handleinput.bind(this);
    this.additem=this.additem.bind(this);
    this.deleteitem=this.deleteitem.bind(this);

  }
handleinput(e){
  this.setState({
    currentitem:{
      text:e.target.value,
      key:Date.now()
    }
  })

}
additem(e){
e.preventDefault();
const newitem=this.state.currentitem;
console.log(newitem);
if(newitem.text!==""){
  const newitems=[...this.state.items,newitem];
  this.setState({
    items:newitems,
    currentitem:{
      text:'',
      key:''

    }
  })
}
}
deleteitem(key){
  const filteredItems=this.state.items.filter(item =>item.key!==key);
  this.setState({
    items:filteredItems
  })
}
  render(){
    return ( 
      <div className="App">
       <h1>To-Do-List</h1>
      <header>
        
        <form id="to-do-form"  onSubmit={this.additem}>
          <input type="text" placeholder="Enter text" 
            value={this.state.currentitem.text} 
            onChange={this.handleinput}/>
          <button type="submit">Add</button>
        </form>
      </header>
      <ListItems items={this.state.items} deleteitem={this.deleteitem}></ListItems>
      </div>
    );
  }

}
  
export default App;
