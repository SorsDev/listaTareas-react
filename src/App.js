import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: false
      },
      {
        id: 2,
        texto: 'Dormir',
        completada: true
      },
    ]
  );

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(false);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <Formulario tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
