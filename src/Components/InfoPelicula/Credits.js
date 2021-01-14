import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./../../Style/credits.css";

function Credits(props) {
  const location = useLocation();
  const [credit, setCredit] = useState([]);
  const img = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${location.state.data[0].id}/credits?api_key=c41ebdb54213c9639a0417118b22e457&language=en-US`
    )
      .then((res) => res.json())
      .then((data1) => {
        setCredit(data1.cast);
      });
  }, [location.state.data]);

  return (
    <div className="contenedorCreditos">
          <h1 style={{ textAlign:"center" }}>Casting</h1>

      {credit.map((credits, i) => (
        <div className="credits" key={i}>

          <div>
            <Avatar
              src={img + credits.profile_path}
              size={80}
              icon={<UserOutlined />}
            />
          <p className="nombresCreditos">{credits.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Credits;
