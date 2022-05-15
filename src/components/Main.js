import React from 'react'
import MoviesTable from "./MoviesTable";
import InputBox from "./InputBox";
import Pagination from "./Pagination";

function Main(props) {
   
  let cPage = props.cPage;
  let setcPage = props.setcPage;
  
  let [text,setText] = React.useState("");
  let [number,setNumber] = React.useState(4);

  let [loading, setLoading] = React.useState(true);
  let [content, setContent] = React.useState([]);
  
  let useEffect = React.useEffect;

  useEffect(() => {
    async function fetchData() {
      // You can await here
      let res = await fetch("https://react-backend101.herokuapp.com/movies");
      res = await res.json();
      setLoading(false);
      // content = res;
      setContent(res);
    }
    fetchData();
  }, []);

  

  const getTextInInput = (passedtext)=>{
    // console.log(text); 
    setText(passedtext);    
    setcPage(1);
  }

  const getNumberInInput = (num)=>{
    // console.log(number); 
    setNumber(num);   
    setcPage(1); 
  }

  let filteredContent ;
  let totalpagesWaliMovies;

  if (content.movies) {
     filteredContent = content.movies;

    // searching 
    if (text != "") {
      filteredContent = content.movies.filter((movie) => {
        let passFromChildrenLowerCase = text.toLowerCase().trim();
        //  console.log(passFromChildrenLowerCase);
        let movieName = movie.title.toLowerCase().trim();
        //  console.log(movieName);
        return movieName.includes(passFromChildrenLowerCase);

      })
    }
    else {
      filteredContent = content.movies;
    }

    // console.log(filteredContent);

    let gName = props.gName;
    //filter genres
    if (gName != "" && gName != "All Genre") {
      filteredContent = filteredContent.filter((movie) => {
        // console.log(movie.genre.name,gName);
        setcPage(1);
        return movie.genre.name === gName;
      })
     
    }

    // filter no. of elements 
    // filteredContent = filteredContent.slice(0,number);

    // console.log(filteredContent);

    totalpagesWaliMovies = filteredContent;
    // **************number of elems logic(Pagination)*********** 

    number = parseInt(number);
    let sidx = (cPage - 1) * number;
    
    let eidx = sidx + number;
    console.log(sidx,eidx,number);
    filteredContent = filteredContent.slice(sidx, eidx);
  }


  return (<div>
      <InputBox getText = {getTextInInput} getNumber={getNumberInInput}></InputBox>
      <MoviesTable passToChildrenText = {text} numberPassed={number}  gName = {props.gName}
        content= {content}
        setContent = {setContent}
        loading = {loading}
        filteredContent = {filteredContent}
        gName = {props.gName}
      ></MoviesTable>
      <Pagination
        totalpagesWaliMovies = {totalpagesWaliMovies}
        moviesCount = {number}
        cPage = {cPage}
        setcPage = {setcPage}
      ></Pagination>
    </div>
  )
}

export default Main