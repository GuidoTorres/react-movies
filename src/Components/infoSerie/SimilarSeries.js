import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

import './../../Style/SimilarSeries.css'

function SimilarSeries(props) {
  const location = useLocation();
  const [similarSerie, setSimilarSerie] = useState([]);
  const img = "https://image.tmdb.org/t/p/w1280";
  const [data, setData]= useState([])
  let history = useHistory();

  useEffect(() => {
    console.log(location.state.dataSerie[0].id);
    fetch(
      `https://api.themoviedb.org/3/tv/${location.state.dataSerie[0].id}/similar?api_key=c41ebdb54213c9639a0417118b22e457&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data2) => {
        setSimilarSerie(data2.results);
      });
  }, [location.state.dataSerie]);

  return (
    <div className="contenedorSimilares" style={{ marginTop: '12vh'}}>
      <h1 style={{ marginLeft: "1vw" }}>Similar Series</h1>
      {similarSerie.map((serie, i) => (
        <div className="similares" key={i}>
          <img
            className="imagenes"
            alt="example"
            src={img + serie.poster_path}
            onClick={() => {
              setData(serie)

              history.push('/infoserie', {data: [serie]})
              }}
          />
        </div>
      ))}
    </div>
  );
}

export default SimilarSeries;
