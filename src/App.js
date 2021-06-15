import React, {Fragment, useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Turno from './components/Turno';

import './index.css';
// import "tailwindcss/tailwind.css";

function App() {

// Turnos en local storage
let turnosIniciales = JSON.parse(localStorage.getItem("turnos"));
if (!turnosIniciales) {
  turnosIniciales = [];
}

// Array de turnos
const [turnos, guardarTurnos] = useState(turnosIniciales);

// Usamos useEffect para activar cuando cambia el state de turnos
useEffect ( () => {
let turnosIniciales = JSON.parse(localStorage.getItem("turnos"));
  if (turnosIniciales) {
    localStorage.setItem('turnos', JSON.stringify(turnos))
  }else{
    localStorage.setItem('turnos', JSON.stringify([]));
  }
}, [turnos]);

// Función que toma las turnos actuales y agrega los nuevos
// recordar los ... del ejercicio anterior.


const crearTurno = turno => {
  guardarTurnos([...turnos, turno]);
}

// Función que elimina las turnos según el id
// también es parecido al carrito de compras.

const eliminarTurno = id => {
  const nuevasTurnos = turnos.filter(turno => turno.id !== id);
  guardarTurnos (nuevasTurnos);
}

// Mensaje condicional
// recordar el ternario que reemplaza al "if"

const titulo = turnos.length === 0 ? 'No hay turnos' : 'Listado de turnos';

  return (

    <Fragment >
        <h1 class="text-center text-3xl my-5 font-mono ">Veterinaria Pet Shop Boys - Administrador de turnos</h1>
        <div >
          <div class="bg-green-400, grid grid-cols-2 gap-2 mx-6 ">
            <div class="col-start-1" >
              <Formulario  
              crearTurno = {crearTurno}
              />
            </div>
            <div class="">
                <h2 class="bg-blue-500 my-5 text-xl text-center ">{titulo}</h2><br />
                {turnos.map(turno => (
                <Turno 
                  key = {turno.id}
                  turno = {turno}
                  eliminarTurno = {eliminarTurno}
                />
                ))}
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
