import logo from './logo.svg';
import './App.css';

import {Component} from "react";
import Header from './Components/Header';
import CountdownTimer from './Components/CountdownTimer';

class App extends Component{

  render(){
       const date = "01/01/2022";
    return(
      <div className='app_container_main'>
        <Header/>
        <CountdownTimer date={date}/>
      </div>
    )
  }
}
export default App;
