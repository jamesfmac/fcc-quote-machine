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
  let text = encodeURI(props.quote)
  let url = 'https://twitter.com/intent/tweet?text='+ text + ' - ' + encodeURI(props.author)
  return(
    <a id ='tweet-quote' href = {url} target= '_blank' rel="noopener noreferrer"> Tweet </a>
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
      quote: '', 
      author: '',
      trumpIsNext: false

    }
  }
  kanyeQuote = () => {
    fetch('https://api.kanye.rest')
  .then((response) => {
    console.log(response)
    return response.json();
  })
  .then((data) => {
    console.log(data);
    this.setState({
      quote: JSON.stringify(data.quote),
      author: 'Kayne West',
      trumpIsNext: true
    })
  })
  .catch((error) => {
    console.log(error, "catch the hoop")
  });
  }

  trumpQuote = () => {
    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
  .then((response) => {
    console.log(response)
    return response.json();
  })
  .then((data) => {
    console.log(data);
    this.setState({
      quote: JSON.stringify(data.message),
      author: 'Donald Trump',
      trumpIsNext: false
    })
  })
  .catch((error) => {
    console.log(error, "catch the hoop")
  });
  }

  fetchQuote = () =>{

    if(this.state.trumpIsNext){
      this.trumpQuote()
    }else{
      this.kanyeQuote()
    }

  }




  handleClick(i){
    this.fetchQuote();
  }


  componentDidMount(){
    this.fetchQuote();
  }


render(){
  return(
    <div id = 'quote-box' style = {boxStyle}> 
    <Text quote = {this.state.quote} />
    <Author author = {this.state.author} />
    <Tweet quote = {this.state.quote} author = {this.state.author}/>
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
