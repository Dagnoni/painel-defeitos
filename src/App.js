import React, { useState } from 'react';
import './App.css';

function App() {

  const [risco, setRisco] = useState(0);
  const [dimensao, setDimensao] = useState(0);
  const [trinca, setTrinca] = useState(0);


  const total = risco + dimensao + trinca;

  return (
    <div className="container">
      

      <div className="item-defeito">
        <span>Risco na superfície - <strong>{risco}</strong></span>
        <button className="botao-registrar" onClick={() => setRisco(risco + 1)}>
          Registrar
        </button>
      </div>

      <div className="item-defeito">
        <span>Dimensão fora do padrão - <strong>{dimensao}</strong></span>
        <button className="botao-registrar" onClick={() => setDimensao(dimensao + 1)}>
          Registrar
        </button>
      </div>

      <div className="item-defeito">
        <span>Peça trincada - <strong>{trinca}</strong></span>
        <button className="botao-registrar" onClick={() => setTrinca(trinca + 1)}>
          Registrar
        </button>
      </div>

      <div className="mensagem-rodape">
        {total === 0 
          ? "Nenhum defeito registrado até o momento." 
          : `Total de defeitos registrados: ${total}`
        }
      </div>

    </div>
  );
}

export default App;