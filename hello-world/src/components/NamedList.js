import React from 'react'
import HeroesList from './HeroesList';

function NamedList() {
  const heroes = [{
    id: 110057,
    name: 'Bruce',
    heroName: 'Batman'
  }, {
    id: 157545,
    name: 'Clark', 
    heroName: 'Superman'
  }, {
    id: 257545,
    name: 'Diana',
    heroName: 'Wonder Women'
  }];

  return (
    <div>
    <HeroesList heroes={heroes}/>
    </div>
  )
}


export default NamedList