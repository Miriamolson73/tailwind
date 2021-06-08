import React from 'react';
import "tailwindcss/tailwind.css";
// import '.src/index.css';
const Turno = ({turno, eliminarTurno}) => (
        <div class="bg-blue-300 my-5 text-xl px-2 rounded grid grid-cols-2">
            <div>
            <p>Mascota: <span>{turno.mascota}</span> </p>
            <p>Propietario: <span>{turno.propietario}</span> </p>
            <p>Fecha: <span>{turno.fecha}</span> </p>
            <p>Hora: <span>{turno.hora}</span> </p>
            <p>Síntoma: <span>{turno.sintomas}</span> </p>
        </div>
        <div class="place-items-center">
            <button 
            type="button" 
            class="bg-blue-400 hover:bg-blue-200  border-2 rounded ml-30 mt-10 border-blue-500"
            onClick = { () => eliminarTurno(turno.id)}
            >Eliminar &times;</button>
        </div>    
        </div>
     );
export default Turno;