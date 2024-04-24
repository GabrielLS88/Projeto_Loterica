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
      <div className="divTitulo">
        <h1 id='tituloLadoLogin'>Gestão De Lotérica</h1>
      </div>
      <div className="boxLogin">
        <h2 id='tituloBoxLogin'>LOGIN</h2>
        <input className='inputSing' type="text" placeholder='Id' />
        <input className='inputSing' type="text" placeholder='Usuário' />
        <div className="divInputPassword">
          <input className='inputSingPassoword'  type={passwordVisivel ? "text" : "password"} placeholder='Senha' /><i id='btnVizualizarPassword' class="bi bi-eye-fill" onClick={converteParaTexto}></i>
        </div>
        <button className='btnEntrar'>Entrar</button>
        <div className="blocoLinks">
          <a id='linksBoxLoguin1' href="#">Esqueceu a senha?</a>
          <a id='linksBoxLoguin2' href="/singup">Novo Cliente?</a>
        </div>
      </div>
    </div>

    <div className="ladoComentarios">

    </div>
   </div>
  )
}

export default SingIn
