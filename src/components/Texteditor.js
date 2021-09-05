import React, { useState } from 'react'
import { Record } from './Record';

export const Texteditor = (props) => {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    } 
    
    const convertToUpper = () => {
        setText(text.toUpperCase());
    }

    const convertToLower = () => {
        setText(text.toLowerCase());
    }

    const clearText = () => {
        if(text !== ''){
            setText('');
        }
    }

    const removeSpaces = (str) => {
        setText(str.replace(/\s+/g, ' ').trim());
    }

    function countWords(str) {
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str = str.replace(/[ ]{2,}/gi," ");
        str = str.replace(/\n /,"\n");
        return str.split(/\s+/).filter((element)=>{return element.length !== 0}).length;
    }

    return (
        <>
            <div className="body">
                <h1 className="mb-4 mt-2">Enter your text below : </h1>
                <div className="mb-3">
                    <textarea className={`form-control rounded-3 bg-${props.mode === 'dark' ? 'black' : 'white'} text-${props.mode === 'dark' ? 'white' : 'black'}`} id="exampleFormControlTextarea1" value={text} onChange={handleChange} rows="5" placeholder="Enter your text here..."></textarea>
                    <button type="button" className="btn btn-primary mt-3" onClick={convertToUpper}>UPPERCASE</button>
                    <button type="button" className="btn btn-primary mt-3 mx-2" onClick={convertToLower}>lowercase</button>
                    <button type="button" className="btn btn-primary mt-3 mx-2" onClick = {() => {removeSpaces(text)}}>Remove Spaces</button>
                    <button type="button" className="btn btn-primary mt-3 mx-2" onClick={clearText}>Clear</button>
                </div>

                <div className="d-flex flex-wrap">
                    <Record mode={props.mode} title = "Characters"  length={text.length} />
                    <Record mode={props.mode} title = "Words" length={countWords(text)}/>
                    <Record mode={props.mode} title = "Reading Time" length={0.48 * countWords(text) + " Sec"}/>
                </div>

                <div className="container p-0">
                    <h2>You can Read from below</h2>
                    {text === "" ? 'Enter text above to preview it' : text}
                </div>
            </div>
        </>
    )
}
