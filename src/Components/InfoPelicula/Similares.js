import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../Style/similares.css";

function Similares(props) {
  const location = useLocation();
  const [similar, setSimilar] = useState([]);

  const img = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${location.state.data[0].id}/similar?api_key=c41ebdb54213c9639a0417118b22e457&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data1) => {
        setSimilar(data1.results);
      });
  }, [location.state.data]);

  return (
    <div className="contenedorSimilares">
      {similar.map((movie, i) => (
        <div className="similares" key={i}>
          <img
            className="imagenes"
            alt="example"
            src={img + movie.poster_path}
          />
        </div>
      ))}
      <br />
    </div>
  );
}

export default Similares;
