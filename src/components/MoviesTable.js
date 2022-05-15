import React from 'react'

function MoviesTable(props) {

  let { content, loading, setContent ,filteredContent} = props
  

  
  let deleteItem = (id) => {
    let narr = content.movies.filter((movie)=>{
        return id !== movie._id;
    })
    // console.log(narr);
    let newObj = {movies:narr};
    setContent(newObj);
  }


  // console.log(props.passToChildrenText);



  return (
    <div>
      {
        loading == true ?
          <div>Loading...</div> :
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-2">#</th>
                <th className="px-2 "> Title</th>
                <th className="px-2">Genre</th>
                <th className="px-2">Stock</th>
                <th className="px-2">Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredContent.map(function (movie, idx) {
                return <tr key={movie._id} >
                  <td className="px-2 text-center">{idx + 1}</td>
                  <td className="px-2 text-center">{movie.title}</td>
                  <td className="px-4 text-center">{movie.genre.name}</td>
                  <td className="px-2 text-center">{movie.numberInStock}</td>
                  <td className="px-2 text-center">{movie.dailyRentalRate}</td>
                  <td><button className="bg-red-500 hover:bg-red-700 text-white 
          font-bold py-2 px-4 rounded" onClick={() => {
                      deleteItem(movie._id);
                    }}>DELETE</button></td>
                </tr>
              })}
            </tbody>

          </table>
      }
    </div>
  )
}

export default MoviesTable