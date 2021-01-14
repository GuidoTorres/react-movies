import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Proveedores(props) {
  const location = useLocation();
  const [provider, setProvider] = useState([]);
  const img = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${location.state.data[0].id}/watch/providers?api_key=c41ebdb54213c9639a0417118b22e457`
    )
      .then((res) => res.json())
      .then((data5) => {
        setProvider(data5.results.US);
        console.log(data5.results.US);
      });
  }, [location.state.data]);

  return (
    <div className="contenedorCreditos">
      {/* <h1 style={{ textAlign:"center" }}>Proveedores</h1>

      {provider.map((proveedor, i) => (
        <div className="credits" key={i}>
          <div>
            <Avatar
              src={img + proveedor.logo_path}
              size={80}
              icon={<UserOutlined />}
            />
            <p className="nombresCreditos">{proveedor.provider_name}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default Proveedores;
