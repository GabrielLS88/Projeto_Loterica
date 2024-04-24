import { useState } from 'react'
import './App.css'




function SingIn() {

  const [passwordVisivel, setPasswordVisivel] = useState(false);
  
  const converteParaTexto = () =>{
    setPasswordVisivel(!passwordVisivel);
  }

  return (
   <div className='bodySingIn'>
    <div className="ladoLogin">
      <div className="divTituloLogin">
        <h1 id='tituloLadoLogin'>Gestão De Lotérica</h1>
      </div>
      <div className="boxLogin">
        <h2 id='tituloBoxLogin'>LOGIN</h2>
        <input className='inputSingLogin' type="text" placeholder='Id' />
        <input className='inputSingLogin' type="text" placeholder='Usuário' />
        <div className="divInputPasswordLogin">
          <input className='inputSingPassowordLogin'  type={passwordVisivel ? "text" : "password"} placeholder='Senha' /><i id='btnVizualizarPassword' class="bi bi-eye-fill" onClick={converteParaTexto}></i>
        </div>
        <button className='btnEntrarLogin'>Entrar</button>
        <div className="blocoLinksLogin">
          <a id='linksBoxLogin1' href="#">Esqueceu a senha?</a>
          <a id='linksBoxLogin2' href="/singup">Novo Cliente?</a>
        </div>
      </div>
    </div>

    <div className="ladoComentarios">

    </div>
   </div>
  )
}

export default SingIn
