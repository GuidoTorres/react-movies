import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Badge, Space } from "antd";
import SimilarSeries from "./SimilarSeries";
import '../../Style/infoSerie.css'

function InfoSerie(props) {
  const location = useLocation();
  const img = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
  }, [location]);

  return (
    <div className="contenedorInfoSeries">
      {location.state.dataSerie.length > 0 &&
        location.state.dataSerie.map((serie, i) => (
          <div
            className="contenedorInfo"
            key={i}
            style={{
              backgroundImage: "url(" + img + serie.backdrop_path + ") ",
            }}
          >
            <img className="frente1" src={img + serie.poster_path} alt="" />

            <div className="info">
              <Space>
                <Badge
                  count={serie.vote_average}
                  style={{ backgroundColor: "#52c41a" }}
                ></Badge>
              </Space>
              <p className="title">{serie.original_name} </p>
              <p className="fecha">Origin Country: {serie.origin_country}</p>
              <p>Synopsis</p>
              <p>{serie.overview}</p>
            </div>
          </div>
        ))}

      <br />
      <br />
            
      <SimilarSeries />
    </div>
  );
}

export default InfoSerie;
