import { useState } from "react";
import "./App.scss";

function App() {
  const [color, setColor] = useState("rojo");

  const ponerFondoAzul = () => {
    setColor("azul");
  };

  const ponerFondoRojo = () => {
    setColor("rojo")
  }

  return (
    <div className={`fondo-contenedor ${color}`}>
      <button onClick={ponerFondoAzul}>Poner el fondo Azul</button>
      <button onClick={ponerFondoRojo}>Poner el fondo Rojo</button>
    </div>
  );
}

export default App;
