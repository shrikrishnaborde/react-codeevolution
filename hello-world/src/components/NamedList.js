import React from 'react'

function NamedList() {
  const names = ['Bruce', 'Clark', 'Diana'];
  const namedList = names.map(name => <h2>{name}</h2>)
  return (
    <div>
    {
      namedList
    }
    </div>
  )
}


export default NamedList