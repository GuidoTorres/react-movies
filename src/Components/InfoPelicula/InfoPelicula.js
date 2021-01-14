import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./../../Style/infoPelicula.css";
import { Badge, Space } from "antd";
import Similares from "./Similares";
import Credits from "./Credits";
import Trailers from "./Trailers";

function InfoPelicula(props) {
  const location = useLocation();
  const img = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {}, [location.state.data.id]);

  return (
    <div className="contenedorInfoPeliculas">
      {location.state.data.length > 0 &&
        location.state.data.map((movie, i) => (
          <div
            className="contenedorInfo"
            key={i}
            style={{
              backgroundImage: "url(" + img + movie.backdrop_path + ") ",
            }}
          >
            <img className="frente1" src={img + movie.poster_path} alt="" />

            <div className="info">
              <Space>
                <Badge
                  count={movie.vote_average}
                  style={{ backgroundColor: "#52c41a" }}
                ></Badge>
              </Space>
              <p className="title">{movie.original_title} </p>
              <p className="fecha">Release date: {movie.release_date}</p>
              <p>Synopsis</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}

      <div className="bajoInfoPeliculas">
        <Trailers />
          <Credits />
        <br/>
        <h1 style={{ marginLeft: "2vw" }}>Similar Movies</h1>
        <Similares />
      </div>
    </div>
  );
}

export default InfoPelicula;
