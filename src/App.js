import React from 'react';
import './App.css';

let style = {
  width: '50%',
  height: 200,
  border: '4px solid black',
  
}

class QuoteBox extends React.Component {

  constructor(props){
    super(props)

  }

  

render(){
  return(
    <div id = 'quote-box' style = {style}> quotes go here</div>
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
