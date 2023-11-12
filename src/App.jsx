import React from "react";
import "./assets/scss/app.scss";

function App() {
  return (
    <div className="contenedor">
      <div className="lista-precios">
        <h2>Lista de Precios</h2>
        <ul>
          <li>
            <strong>Producto 1:</strong> $50
          </li>
          <li>
            <strong>Producto 2:</strong> $100
          </li>
          <li>
            <strong>Producto 3:</strong> $150
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
