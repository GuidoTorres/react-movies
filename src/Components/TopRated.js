import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function TopRated() {
  const img = "https://image.tmdb.org/t/p/w1280";

  const [top, setTop] = useState([]);
  const [data, setData]= useState([])
  let history = useHistory();


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=c41ebdb54213c9639a0417118b22e457&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data1) => {
        setTop(data1.results);

      });
  }, []);

  return (
    <div className="contenedor">
      {/* <h1 style={{marginLeft:"1vw"}}>Top Rated</h1> */}
      <h1 style={{marginLeft:"2.5vw", marginTop: "2vh", fontWeight: 'bold',}}>Mejor valoradas</h1>
      <div className="pelisCard">
        {top.map((movie, i) => (
          <div className="box" key={i}>
            <img
              className="imagenes"
              alt="example"
              src={img + movie.poster_path}
              onClick={() => {
                setData(movie)

                history.push('/infopeli', {data: [movie]})
                }}
            />
            <h2>
              <span> &#127775; {movie.vote_average}</span>
            </h2>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default TopRated;
