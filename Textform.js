import React,{useState} from 'react'
//the above line is use of state this usestate component is imported 
//and   const [text, setText] = useState("enter text here"); //copied from bootstrap  
//this text is the one to be uset settext is a function so as to set its value as stated its way below

export default function Textform(props) {
    const handleUpClick = () =>{
        console.log("upper case was clicked " + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showalert("converted to uppercase","success");
    }

    const handleDownClick = () =>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showalert("converted to lowercase","success");
    }
    const handleclearClick = ()=>{
      let  newText= ' ';
        setText(newText)
        props.showalert("text cleared","success");
    }
    // <textarea className="form-control" value={text} onChange ={handleonchange} id="mybox" rows="8"></textarea>
    //when we add something to the textbox the onchange function is run
    const handleonchange = (event) =>{
        console.log("On change ");
        setText(event.target.value)
         //so that we can add text to it
    }
    const [text, setText] = useState("enter text here");
    // text = "new text" ;// wrong way 
    // setText("new text");  // correct way to change the value of text 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1> 
<div className="mb-3">
  {/* <label for="my box" className="form-label">{props.heading}</label> */}
  <textarea className="form-control" value={text} onChange ={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button classNameName='btn.btn.primary mx-3' onClick={handleUpClick}>Convert to Uppercase</button>
<button classNameName='btn.btn.primary mx-3' onClick={handleDownClick}>Convert to Lowercase</button>
<button classNameName='btn.btn.primary mx-3' onClick={handleclearClick}>Clear text</button>

    </div>
    
    <div className='container mb-3'style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p> your text have {text.split( " ").length} words and {text.length} charecters</p>
        <p>{0.008 * text.split( " ").length } Minutes to read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
  </>
  )
}

