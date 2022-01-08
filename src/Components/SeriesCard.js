import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useHistory } from "react-router-dom";

import "./../Style/seriesCard.css";

export default function SeriesCard({
  name,
  poster_path,
  vote_average,
  overview,
  id,
}) {
  const img = "https://image.tmdb.org/t/p/w1280";
  const [series, setSeries] = useState([]);
  const [activePage, setActivePage] = useState();
  const [dataSerie, setDataSerie] = useState([]);
  let history = useHistory();

  const handlePageChange = (pageNum) => {
    console.log(pageNum);
    let pagina = setActivePage(pageNum);
    console.log(pagina);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=c41ebdb54213c9639a0417118b22e457&page=${activePage}`
    )
      .then((res) => res.json())
      .then((data1) => {
        setSeries(data1.results);
      });
  }, [activePage]);

  return (
    <div className="contenedor">
      <h1 style={{ fontWeight: "bold", padding: "8px" }}>Ultimas series</h1>

      <div className="seriesCard">
        {series.length > 0 &&
          series.map((serie, i) => (
            <div className="box" key={i}>
              <img
                className="series"
                alt="example"
                src={img + serie.poster_path}
                onClick={() => {
                  setDataSerie(serie);

                  history.push("/infoserie", { dataSerie: [serie] });
                }}
              />

            </div>
          ))}
      </div>
      <div className="paginacionContenedor">
        <Pagination
          className="paginacion"
          defaultCurrent={1}
          total={100}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
