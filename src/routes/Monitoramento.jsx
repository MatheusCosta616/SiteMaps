import React from 'react';
import './Monitoramento.css';
import MapaOSM from '../js/MapaOSM.jsx'; // Importe o componente MapaOSM

export default function Monitoramento() {
  return (
    <div className="container-monitor">
      <h1 id="monitoramento-titulo">Monitoramento de área:</h1>
      <div className='container-imagens'>
        <MapaOSM />
      </div>
    </div>
  );
}
