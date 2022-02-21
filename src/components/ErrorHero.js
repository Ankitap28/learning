import React from 'react'

function ErrorHero({ heroName }) {
    if(heroName==='Joker'){
        throw new Error('Error, Not a hero')
    }
  return (
  <div>
  {heroName}
  </div>
  )
}

export default ErrorHero