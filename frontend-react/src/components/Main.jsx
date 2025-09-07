
import React from 'react'
import Button from './Botton'


const Main = () => {
  return (
    <>
    
        <div className='containeer'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>Lorsque les premiers volumes du premier livre de Donald Knuth,The Art of Computer Programming, ont été publiés en 1968, ils ont d'abord été imprimés par composition au métal chaud, une technique datant du XIXe siècle qui donnait un caractère « ancien » apprécié par Knuth. Cependant, lors de la seconde édition du second volume en 1976, le livre entier a dû être recomposé parce que les éditeurs utilisaient une nouvelle technique appelée photocomposition qui ne fonctionnait plus avec les anciennes polices. En effet, les anciennes imprimeries avaient été remplacées par des imprimeries à impression photographique. Lorsque Knuth reçut les premiers essais de cette édition, il fut profondément déçu par la qualité du rendu typographique, qu’il jugea « horrible »[2].

</p>
        <Button text='Login' class ='btn-outline-info' url="/login"/> 

            </div>
      
      </div>
   
    </>
    
  )
}

export default Main
