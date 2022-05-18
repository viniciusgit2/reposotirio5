import React, { Component, Fragment } from 'react'
import ComponentesComParametro from './components/basicos/ComponentesComParametro'
import './App'
import Card from "./components/layout/Card"
import Familia from './components/basicos/Familia'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './aleatorio'
import alunos from './data/alunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import produtos from './data/produtos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import DiretaFilho from './components/comunicacao/DiretaFilho'
import IndiretaFilho from './components/comunicacao/IndiretaFilho'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'
import calculator from '../calc/compononte/main/Calculator'
import Calculator from '../../novos-projetos/calculadora/src/main/Calculator'
export default (props) => {
  


  return(
 



 <><Fragment>
     <Fragment key={1}>"cuidado com esse ero"</Fragment>
   </Fragment><Aleatorio>
       <ComParametro>
      
       </ComParametro>
       <FamiliaMembro>

       </FamiliaMembro>
     </Aleatorio><ParOuImpar>
       <div>
         <span>par</span>
         <span>impar</span>
       </div>
     </ParOuImpar><TabelaProdutos>
       Cadeira
       S20
       Sansung
     </TabelaProdutos><megasena>
       <gerarnumero></gerarnumero>
     </megasena><span>
       verdadeiro
     </span><span> falso</span><IndiretaFilho>
       <span>
         nome
       </span>
      
     </IndiretaFilho><IndiretaPai>nome</IndiretaPai>nome<calc></calc><const classname="Card" style={Card.style}></const><div className='title'>{props.titulo}</div><div className='title'>{props.nota}</div><div className='title'>{props.FamiliaMembro}</div><div className='title'>{TabelaProdutos}</div><div className='title'>{IndiretaFilho}</div><div className='title'>{IndiretaPai}</div><div className='title'>{ParOuImpar}</div><div className='title'>{Contador}</div><div className='title'>{<calc />}
     </div></>
  )
}
  



           
          
         
        
  
  
          

