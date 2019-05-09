import React from 'react';
import './App.css';

let textStlye = {
  padding: '20px 20px 5px 20px',
  textAlign: 'justify',
  fontSize: '1.75em',
}

let authorStyle = {
  paddingRight: '20px',
  alignSelf: 'flex-end',
  fontSize: '1.0em',

}

let boxStyle = {
  width: '50%',
  minHeight: 200,
  boxShadow: '0px 2px 4px rgba(0,0,0,0.18)',
  borderRadius: '45px 0px',
  backgroundImage: 'linear-gradient(to right top, #d3e1f5, #c5eaf8, #c0f2ef, #ccf6dd, #e9f6cb)',
  display: 'flex',
  flexDirection: 'column',
  
}

let barStyle = {
  marginTop: 'auto',
    padding: '20px',
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',

}
let buttonStyle = {
  borderRadius:'4px',
  height: 30,
  fontSize: '1em',
  background: 'ghostwhite',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.18)',

}

let tweetStyle = {
  backgroundImage: 'Url(public/twitter-logo.png)'
}




function Text (props){
  return (
    <div id = 'text' style = {textStlye}>{props.quote}</div>
  )
}

function Author (props){
  return (
    <div id = 'author' style = {authorStyle}> - {props.author}</div>
  )
}

function Button (props){
  return(
    <button id ='new-quote' onClick = {props.onClick}  style = {buttonStyle}> New Tweet</button>
  )
}

function Tweet (props){
  let text = encodeURI(props.quote)
  let url = 'https://twitter.com/intent/tweet?text='+ text + ' - ' + encodeURI(props.author)
  return(
    <a id ='tweet-quote' href = {url} target= '_blank' rel="noopener noreferrer">
    <img src ='/twitter-logo.png' width="40" height="40"/>   </a>
  )
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
      <div id = 'button-bar' style = {barStyle}>
        <Tweet quote = {this.state.quote} author = {this.state.author}/>
        <Button onClick = {(i) => this.handleClick(i)} />
      </div>
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
