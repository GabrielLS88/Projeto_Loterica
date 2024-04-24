import { useState } from 'react'
import './App.css'

function SingIn() {
  return (
   <div className='bodySingIn'>

    <div className="ladoLogin">
      <h1 id='tituloInicial'>Gestão de lotérica</h1>
      <div className="boxLogin">
        <h2>Loguin</h2>
        <form>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
        </form>
      </div>
    </div>

    <div className="ladoComentarios">

    </div>
   </div>
  )
}

export default SingIn
