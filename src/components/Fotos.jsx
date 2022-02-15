import { useState, useEffect } from "react";
let url = `https://dog.ceo/api/breeds/image/random`;

export function Fotos() {
  let [fotos, setFotos] = useState([]);
  let [estadoBoton, setEstadoBoton] = useState(true);

  useEffect(() => {
    if (estadoBoton) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setFotos(data.message);
          setEstadoBoton(false);
        });
    }
  }, [cambio]);

  function cambio() {
    setEstadoBoton(true);
  }

  return (
    <div className="d-block">
      <div>
        <img src={fotos} className="img-rounded" style={{ width: "400px" }} />
        <div className="d-grid gap-2 d-md-block my-3 width=300 "></div>
        <button className="btn btn-primary" type="button" onClick={cambio}>
          Cambiar imagen
        </button>
      </div>
    </div>
  );
}
