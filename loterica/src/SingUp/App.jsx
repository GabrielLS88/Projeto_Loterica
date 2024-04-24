import { useState } from 'react'
import './App.css'




function SingUp() {

  const [passwordVisivel, setPasswordVisivel] = useState(false);
  
  const converteParaTexto = () =>{
    setPasswordVisivel(!passwordVisivel);
  }

  return (
   <div className='bodySingUp'>

    <div className="ladoCadastrarCadastro">
      <div className="divTituloCadastro">
        <h1 id='tituloLadoCadastro'>Gestão De Lotérica</h1>
      </div>
      <div className="boxCadastro">
        <h2 id='tituloBoxCadastro'>LOGIN</h2>
        <input className='inputSingCadastro' type="text" placeholder='Nome' />
        <input className='inputSingCadastro' type="text" placeholder='E-mail' />
        <div className="divInputPasswordCadastro">
          <input className='inputSingPassowordCadastro'  type={passwordVisivel ? "text" : "password"} placeholder='Senha' /><i id='btnVizualizarPassword' class="bi bi-eye-fill" onClick={converteParaTexto}></i>
        </div>
        <button className='btnCadastro'>Cadastrar</button>
        <div className="blocoLinksCadastro">
          <a id='linksBoxCadastro' href="/">Ja sou cliente?</a>
        </div>
      </div>
    </div>

    <div className="ladoComentariosCadastro">

    </div>
   </div>
  )
}

export default SingUp
