import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import "../../Style/carousel.css";

export default function InicioCarousel() {
  const [movies, setMovies] = useState([]);

  const img = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c41ebdb54213c9639a0417118b22e457&page=1`
    )
      .then((res) => res.json())
      .then((data1) => {
        setMovies(data1.results);

        console.log(data1);
      });
  }, []);

  return (
    <div className="carouselContenedor">
      <Carousel className="Carousel" autoplay fade>
        {movies.length > 0 &&
          movies
            .slice(0, 10)
            .map((movie, i) => (


            <div key={i}>
                <img className="carousel_img" src={img + movie.backdrop_path} alt="" />
                <div className="cont_info">
                    <div className="info_izq">

                    <img className= "img_short" src={img + movie.poster_path} alt=""></img>
                    </div>
                    <div className="info_der">

                    <h1>{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                    </div>
                </div>

            </div>


            ))}

      </Carousel>
    </div>
  );
}
