import React from 'react'

function Genre(props) {
  
  let [isLoaded,setLoaded] = React.useState(false);
  let [content,setContent] = React.useState([]);
  
  let useEffect = React.useEffect;

  useEffect(() => {
    async function fetchData() {
      // You can await here
      let res = await fetch("https://react-backend101.herokuapp.com/genres");
      res = await res.json();
     
      setLoaded(true);
      setContent(res.genres);
      // console.log(res.genres);
    }
    fetchData();
  }, []);

  let handleGenre = (e)=>{
    //  console.log(e.target.innerText);
      props.handleGenre(e.target.innerText);
      props.setcPage(1);
  }

  return (
    <div>
      {isLoaded==false?<div className="font-bold">Loading...</div>:
        <div>
          <div className="mr-6 border-2 w-40 text-center h-10 font-bold cursor-pointer" onClick={handleGenre}>All Genre</div>
          <div>{content.map((genre,idx)=>{
              return (
                <div key = {idx} className="mr-6 border-2 w-40 text-center h-10 font-bold cursor-pointer" onClick={handleGenre}>{genre.name}</div>
              )
          })
        }</div>
        </div>
      }
      
    </div>
  )
}

export default Genre