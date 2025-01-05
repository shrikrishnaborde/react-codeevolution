import React from 'react'

function NamedList() {
  const names = ['Bruce', 'Clark', 'Diana'];
  return (
    <div>
    {
      names.map(name => <h2>{name}</h2>)
    }
    </div>
  )
}

export default NamedList