import React from 'react'
import Genre from './Genre'
import Main from "./Main";
function Movies() {
  let [cPage,setcPage] = React.useState(1);
  let [gname,setGname] = React.useState("");

  const setGlobalGenre = (gname) => {
    console.log("main: " + gname);
    if (gname == "All Genre") {
      setGname("");
    } else {
      setGname(gname);
    }
    setcPage(1);
}

  

  return (
    <div className="flex">
      <Genre handleGenre = {setGlobalGenre} cPage={cPage} setcPage={setcPage}></Genre>
      <Main gName = {gname} cPage={cPage} setcPage={setcPage}></Main>
    </div>
  )
}

export default Movies