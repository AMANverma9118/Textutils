import React, { useState } from 'react'


function check(text) {

  //trim() is used to remove the whitespace from the text
  const wordsArray = text.trim().split(/\s+/).filter(word => word.length > 0);
  const wordsCount = wordsArray.length;

  const paragraphsArray = text.split(/\n+/).filter(paragraph => paragraph.length > 0);
  const numberOfParagraphs = paragraphsArray.length;

  if (/^[a-zA-Z0-9 ]*$/.test(text)) {
    return (
      <>
        <p>{wordsCount} Words and {text.length} Characters</p>
        <p>You take {0.008 * wordsCount} Minutes to read the words</p>
        <p>Number of Paragraph in your text {numberOfParagraphs}</p>
      </>
    )
  }
  else {
    return (
      <>
        <p>{wordsCount} Words and {text.length} Characters</p>
        <p>You take {0.008 * wordsCount} Minutes to read the words</p>
        <p>Number of Paragraph in your text {numberOfParagraphs}</p>
      </>
    )
  }
}

export default function Textinput(proops) {
  const Handelupper = () => {
    //  console.log("Upper case clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    if(text.length===0)
      {
        proops.ShowAlert("Enter Text!","warning");
      }
      else{
        proops.ShowAlert("Your text has been converted into Upper case Successfully!","success");
      }
    
  }

  const Handellower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(text.length===0)
      {
        proops.ShowAlert("Enter Text!","warning");
      }
      else{
        proops.ShowAlert("Your text has been converted into Lower case Successfully!","success");
      }
    
  }

  const HandelClear = () => {
    let newText = "";
    setText(newText);
    if(text.length===0)
      {
        proops.ShowAlert("Enter Text!","warning");
      }
      else{
        proops.ShowAlert("Your text has been Cleared Successfully!","success");
      }
    
  }

  const HandelCopy = () => {
    navigator.clipboard.writeText(text);
    if(text.length===0)
      {
        proops.ShowAlert("Enter Text!","warning");
      }
      else{
        proops.ShowAlert("Your text has been Copied Successfully!","success");
      }
   
    
  }

  const Handelspace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    if(text.length===0)
      {
        proops.ShowAlert("Enter Text!","warning");
      }
      else{
        proops.ShowAlert("Your text has been free from extra white space Successfully!","success");
      }
    
  }




  //the bellow code is used to change the default value given to text
  const Handelonchange = (event) => {
    setText(event.target.value)

  }


  const [text, setText] = useState("");
  // text = "New text" //This is the wrong way to change the text
  // settext("New text"); //This is the correct way to change the text
  return (
    <>
      <div className="container" style={{ color: proops.mode === 'dark' ? 'white' : 'black' }}>


        <h1>{proops.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={Handelonchange} style={{ backgroundColor: proops.mode === 'dark' ? 'black' : 'white', color: proops.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="9"></textarea>
          <button className="btnofupper" onClick={Handelupper}>Convert to Uppercase</button>
          <button className="btnofupper" onClick={Handellower}>Convert to Lowercase</button>
          <button className="btnofupper" onClick={HandelClear}>Clear Text</button>
          <button className="btnofupper" onClick={HandelCopy}>Copy Text</button>
          <button className="btnofupper" onClick={Handelspace}>Remove Extra Space</button>
        </div>


        <div className="container my-2">
          <h2>Your Text Summary</h2>
          <p>{check(text)}</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Something to Display"}</p>

        </div>
      </div>
    </>

  )
}
