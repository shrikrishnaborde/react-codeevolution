import React from 'react'

function MemoComponent(props) {
  console.log('MemoComponent')

  return (
    <div>MemoComponent</div>
  )
}

export default React.memo(MemoComponent)