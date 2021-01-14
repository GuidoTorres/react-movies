import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "antd";
import "./../../Style/trailer.css";

function Trailers(props) {
  const location = useLocation();
  const [trailer, setTrailer] = useState([]);


  useEffect(() => {
    fetch(
      `  https://api.themoviedb.org/3/movie/${location.state.data[0].id}/videos?api_key=c41ebdb54213c9639a0417118b22e457&language=en-US`
    )
      .then((res) => res.json())
      .then((data1) => {
        setTrailer(data1.results);
      });
  }, [location.state.data]);

  return (
    <div className="contenedorVideo">
      {trailer.map((result, i) => (
        <div className="videoCarousel" key={i} >       
        <Carousel >

            <iframe className="video"

            src={`https://www.youtube.com/embed/${result.key}`}
            key={i}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            
            />

          </Carousel>
          
        </div>
      ))}
    </div>
  );
}

export default Trailers;
