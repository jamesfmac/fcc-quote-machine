import React from 'react';
import './App.css';




function Text (props){
  return (
    <div id = 'text'>{props.quote}</div>
  )
}

function Author (props){
  return (
    <div id = 'author'>{props.author}</div>
  )
}

function Button (props){
  return(
    <button id ='new-quote' onClick = {props.onClick}> New Tweet</button>
  )
}

function Tweet (props){
  return(
    <a id ='tweet-quote' href = 'twitter.com/intent/tweet'> Tweet </a>
  )
}


let boxStyle = {
  width: '50%',
  height: 200,
  border: '4px solid black',
  
}
class QuoteBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quote: 'Initial quote', 
      author: 'Initial author'

    }
  }

  handleClick(i){
    this.setState({
      quote: 'Second quote',
      author: 'Second author'
    })
  }


render(){
  return(
    <div id = 'quote-box' style = {boxStyle}> 
    <Text quote = {this.state.quote} />
    <Author author = {this.state.author} />
    <Tweet author = {this.state.author}/>
    <Button onClick = {(i) => this.handleClick(i)} />
    
    
    </div>
  )
}

}




const appStyle = {
 display: 'flex',
 flexDirection: 'row',
 height: '100vh',
 justifyContent: 'center',
 alignItems: 'center',
}


function App() {
  return (
    <div className="App" style = {appStyle} >
     <QuoteBox />
    </div>
  );
}

export default App;
