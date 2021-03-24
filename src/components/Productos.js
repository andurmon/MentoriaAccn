import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Productos() {
  const [productos, setProductos] = useState([]);
  
  useEffect( ()=>{
    axios("https://raw.githubusercontent.com/andurmon/coderhouse-backend/master/Clase10%20MotoresPlantilla1/Desafio/data/productos.txt")
      .then( (data) => {
        setProductos(data.data)
        console.log(productos);
      })
      .catch(er => console.log(er))
  }, [setProductos])

  
  return (
    <div className="App">
      <table>
        <thead><th>Titulo:</th><th>Precio: </th><th>Imagen:</th></thead>
        {productos.map( pdto => {
          return <tr><td>{pdto.title}</td><td>{pdto.price}</td><td><img width="100" src={pdto.thumbnail}></img></td></tr>
        })}
      </table>
      
    </div>
  );
}

export default Productos;
