import { useState } from 'react'


function TriviaQ({category, title, description}){

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
      {flipped &&
        <div className='card-backQ'>
        <p>{description}</p>
        </div>
      }
        
    </div>
  )
}

export default TriviaQ