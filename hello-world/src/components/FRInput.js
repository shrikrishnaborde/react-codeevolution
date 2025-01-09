import React from 'react'

const FRInput = React.forwardRef((props,ref) => {
  return (
    <input type="text" ref={ref} />
  )
})

export default FRInput