import React from 'react'
import { Link } from 'react-router-dom';

function InputBox(props) {
  let [text,setText] = React.useState("");
  let [number,setNumber] = React.useState(4);
  const handleText = (e)=>{
     text = e.target.value;
     setText(text);
     props.getText(text);
  }

  const handleNumber = (e)=>{
    number = e.target.value;
    setNumber(number);
    props.getNumber(number);
  }

  return (
    <>
     {/* <link to = "/new"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button></link> */}
     <Link to="/new"
        className="bg-blue-500 hover:bg-blue-700 text-white 
        font-bold py-2 px-4 rounded"
        >New</Link>
     <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded mx-4 py-2 px-4 text-gray-700 focus:outline focus:bg-white focus:border-purple-500" type="text" value={text} onChange={handleText}></input>
     <input type="number" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded mx-4 w-20 py-2 px-4 text-gray-700 focus:outline focus:bg-white focus:border-purple-500" value={number} onChange={handleNumber}></input>
    </>
  )
}

export default InputBox