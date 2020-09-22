import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Join from './components/Join';
import ChatComponent from './components/Chat';
class App extends React.Component{
render(  ){
  return (
    <div className="App">
 <BrowserRouter>
 <Route exact path = "/" component = {ChatComponent}/>
 <Route path = "/join" component = {Join}/>
 
 </BrowserRouter>
    </div>
  );
  }
}

export default App;