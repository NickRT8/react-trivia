import { useState } from 'react'


function TriviaA({key, category, title, description, result}){

  const [flipped, setFlipped] = useState(false)

  function handleClick() {
    setFlipped(!flipped)
  }

  return (
    <div onClick={
      () => {handleClick()}
      }>            
      {/* FRONT */}
      {!flipped &&                
        <div className='card'>
          <div className='top'>
            <p>{category}</p>
          </div>
          
          <div className='bottom'>
            <h2>{title}</h2>
          </div>
        </div>
      }

      {/* BACK */}
      {flipped && result==="CORRECT!" &&
        <div className='card-backTrue'>
        <p>{description}</p>
        <h2>{result}</h2>
        </div>
      }

      {flipped && result==="TRY AGAIN!" &&
        <div className='card-backFalse'>
        <p>{description}</p>
        <h2>{result}</h2>
        </div>
      }
      
    </div>
  )
}

export default TriviaA