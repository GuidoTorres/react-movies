import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Style/topRated.css";

function TopRated() {
  const img = "https://image.tmdb.org/t/p/w1280";

  const [top, setTop] = useState([]);
  const [data, setData] = useState([]);
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
      <h1 className="titulo">Mejor valoradas</h1>
      <div className="pelisCard">
        {top.map((movie, i) => (
          <div className="box" key={i}>
            <img
              className="imagenes"
              alt="example"
              src={img + movie.poster_path}
              onClick={() => {
                setData(movie);

                history.push("/infopeli", { data: [movie] });
              }}
            />
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default TopRated;
