import React from 'react'

function HeroesList({heroes}) {
  const heroesList = heroes.map(hero => <h2 key={hero.id}>{hero.name} a.k.a {hero.heroName}</h2>)
    return (
      <div>
      {heroesList}
      </div>
    )
}

export default HeroesList