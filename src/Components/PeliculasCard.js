import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useHistory } from "react-router-dom";

import "./../Style/PeliculasCard.css";


export default function PeliculasCard({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  id,
  page
}) {
  const [movies, setMovies] = useState([]);

  const img = "https://image.tmdb.org/t/p/w1280";

  const [activePage, setActivePage] = useState();

  const [data, setData]= useState([])
  let history = useHistory();

  const handlePageChange = (pageNum) => {
    setActivePage(pageNum);
    window.scrollTo(0, 0);
  };


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c41ebdb54213c9639a0417118b22e457&page=${activePage}`
    )
      .then((res) => res.json())
      .then((data1) => {
        setMovies(data1.results);
      });


  }, [activePage]);

  return (
    <div className="contenedor">

      <h1 style={{marginLeft:"2.5vw", marginTop: "2vh", fontWeight: 'bold'}}>Ultimas Películas</h1>

      <div className="pelisCard">
        
        {movies.length > 0 &&
          movies.map((movie, i) => (

            
            <div className="box" key={i}
            >

            <img
              className="imagenes"
              alt="example"
              src={img + movie.poster_path}
              onClick={() => {
                setData(movie)

                history.push('/infopeli', {data: [movie]})
                }}

              />
              
          <h2><span> &#127775; {movie.vote_average}</span></h2>
              
            </div>
          ))}

      </div>
      <div className="paginacionContenedor">
        <Pagination
          className="paginacion"
          defaultCurrent={movies.page}
          total={450}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
