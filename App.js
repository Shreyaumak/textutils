// import logo from './logo.svg';
// import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Textform from './components/Textform';
import React,{useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';


// let name="Shreya";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);


const showalert = (message,type)=>{
setalert(
  {msg: message,
  type:type}
)
setTimeout(() => {
  setalert(null);
}, 2000);
}
  const togglemode = ()=>{
    if(mode==='light')
    {
      setmode('dark')
      document.body.style.backgroundColor = '#112125';
      showalert("Dark mode has been enebled","success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enebled","success");
    }
  }
  return (
    <>
  {/* <Router> */}
<Navbar title="TextUtils " mode ={mode} togglemode={togglemode}/>   
 {/* passing props above name of textutils will chane to textutils2   */}
 <Alert alert={alert}/>
<div className='container my-3'>
  {/* // my-3 to add the spacting between two lines */}
  {/* <Routes> */}
          {/* <Route exact path='/About' element={<About />}></Route> */}
          
      {/* <Route exact path='/' element= {<Textform showalert={showalert} heading="enter text here"  mode ={mode}/>}>  */}
            {/* <Home /> */}
            <Textform showalert={showalert} heading="enter text here"  mode ={mode}/>            
          {/* </Route> */}
        {/* </Routes> */}


{/* <About/> */}
</div> 
{/* </Router> */}
    </>
  );
}

export default App;
/* filled 9 lpa 97k


jsx
 react has two types of components :1. function based components(mostly used) 2. className based components
 above app is return in function basec components 
 syntax
 function App() {
  return (entire jsx code  line 6 to line 22 )
 }

 this jsx in inshort html in this the only change is we have written classNamename instead of className in html  and for is not used instead of that we use html for
 here we have to wrap all the html code of jsx in one tag here we used div 
  we can add head ing tad for this just do <> at beginning and at end </> this we help to stop the error that my be seen due to usinf h1 tag and div at a time as all component are to be wrapped in a one tag  */

  // props means properties when we make the custom components we can send things to it using props eg 

  // two concepts of js 1. named export 2. default export
//in default export we export an item from module1 to module2 and module has to import that default thing
//while in named export  we have to specify the names of the object while importing and while exporting  



//steps
// 1.index.html madhe bootstrap cha css and js add keli(starter template) 
// 2.mg app.js madhe bootstrap cha navbar add kela pn tya html chya pratyak tag close kara aani class aaiwajio className liha 
// + tyat href="/" liha 
//3.aata new component folder banva tyat navbar.js banva tyat te rct liha jyane function based component cha syntax lihum yeil 
//aata te aap.js madhla bootstrp vr cha navbar navbar.js la copy kara app.js madhun delete karun ani app.js madhe fakt <Navbar/> as liha aani execute kara
//  4./* passing props above name of textutils will change to textutils2   */ <Navbar title="textutils2 " />   
// ata navbar.js madhe export default funtion navbar(props)<--  {bracket madhe props add kela me }
    // aani navbar.js madhe jithe textutils lihun hota tutha props.title liha

    // so what is props we have made a component and we want to pass some variable to that

    // HOOKS:-are used to use classfeATURES without making class  they are used to import state
    


    