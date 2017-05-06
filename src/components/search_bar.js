import React,{Component } from 'react';
import './styles.css'


class SearchBar extends Component{
 constructor(props){
   super(props);
   this.state={textChange:""}
 }
  render(){
    return (<div className="search_input" >
    <input id="input" placeholder="Search"/>
    <div className="search" onClick={()=>{
      console.log("search");
      var search=document.getElementById("input").value;
      console.log(search);
      this.props.onSearch(search);

    }} ></div>

    </div>);
  }
search(){



}
}
 export default SearchBar;
