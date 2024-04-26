import { useState } from 'react'
import './Avaliacao.css'

function Avaliacao({Logo}) {

  return (
   <div className='bodyAvaliacao'>
    <div className="blocoAvaliacao">
      <h1 id='tituloAvaliacao'>O que as pessoas estão achando?</h1>
      <div className="imagenUsuario">
          <img id='imgLogoAvatar' src={Logo} alt="" />
      </div>
      <p id='subtituloAvaliação'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum minima quae nesciunt optio incidunt nihil sequi dolorem porro itaque quos doloremque, ipsa perspiciatis. Perferendis, deserunt. Id quo molestias placeat hic!</p>
      <h3>@Teste_Produção</h3>
      <p id='situacaoNaEquipe'>Membro da equipe</p>
      <div className='blocoEstrelasAvaliacao'>
        {/* <i id='estrelas' class="bi bi-star"></i>
        <i id='estrelas' class="bi bi-star"></i>
        <i id='estrelas' class="bi bi-star"></i>
        <i id='estrelas' class="bi bi-star"></i>
        <i id='estrelas' class="bi bi-star"></i> */}
        <i id='estrelas' class="bi bi-star-fill"></i>
        <i id='estrelas' class="bi bi-star-fill"></i>
        <i id='estrelas' class="bi bi-star-fill"></i>
        <i id='estrelas' class="bi bi-star-fill"></i>
        <i id='estrelas' class="bi bi-star-fill"></i>
        {/* <i id='estrelas' class="bi bi-star-half"></i>
        <i id='estrelas' class="bi bi-star-half"></i>
        <i id='estrelas' class="bi bi-star-half"></i>
        <i id='estrelas' class="bi bi-star-half"></i>
        <i id='estrelas' class="bi bi-star-half"></i> */}
      </div>
    </div>
      
   </div>
  )
}

export default Avaliacao
