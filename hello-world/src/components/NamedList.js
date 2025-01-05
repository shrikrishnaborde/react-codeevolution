import React from 'react'
import HeroesList from './HeroesList';

function NamedList() {
  const heroes = [{
    name: 'Bruce',
    heroName: 'Batman'
  }, {
    name: 'Clark', 
    heroName: 'Superman'
  }, {
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